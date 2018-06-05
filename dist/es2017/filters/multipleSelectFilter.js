var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { I18N } from 'aurelia-i18n';
import { inject } from 'aurelia-framework';
import { OperatorType } from './../models/index';
import { CollectionService } from '../services/collection.service';
import * as $ from 'jquery';
let MultipleSelectFilter = class MultipleSelectFilter {
    /**
     * Initialize the Filter
     */
    constructor(collectionService, i18n) {
        this.collectionService = collectionService;
        this.i18n = i18n;
        this.isFilled = false;
        this.enableTranslateLabel = false;
        // default options used by this Filter, user can overwrite any of these by passing "otions"
        this.defaultOptions = {
            container: 'body',
            filter: false,
            maxHeight: 200,
            okButton: true,
            addTitle: true,
            countSelected: this.i18n.tr('X_OF_Y_SELECTED'),
            allSelected: this.i18n.tr('ALL_SELECTED'),
            selectAllText: this.i18n.tr('SELECT_ALL'),
            selectAllDelimiter: ['', ''],
            // we will subscribe to the onClose event for triggering our callback
            // also add/remove "filled" class for styling purposes
            onClose: () => {
                const selectedItems = this.$filterElm.multipleSelect('getSelects');
                if (Array.isArray(selectedItems) && selectedItems.length > 0) {
                    this.isFilled = true;
                    this.$filterElm.addClass('filled').siblings('div .search-filter').addClass('filled');
                }
                else {
                    this.isFilled = false;
                    this.$filterElm.removeClass('filled').siblings('div .search-filter').removeClass('filled');
                }
                this.callback(undefined, { columnDef: this.columnDef, operator: 'IN', searchTerms: selectedItems });
            }
        };
    }
    /** Getter for the Grid Options pulled through the Grid Object */
    get gridOptions() {
        return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
    }
    get operator() {
        return OperatorType.in;
    }
    /**
     * Initialize the filter template
     */
    init(args) {
        if (!args) {
            throw new Error('[Aurelia-SlickGrid] A filter must always have an "init()" with valid arguments.');
        }
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = args.searchTerms || [];
        if (!this.grid || !this.columnDef || !this.columnDef.filter || !this.columnDef.filter.collection) {
            throw new Error(`[Aurelia-SlickGrid] You need to pass a "collection" for the MultipleSelect Filter to work correctly. Also each option should include a value/label pair (or value/labelKey when using Locale). For example: { filter: { model: Filters.multipleSelect, collection: [{ value: true, label: 'True' }, { value: false, label: 'False'}] } }`);
        }
        this.enableTranslateLabel = this.columnDef.filter.enableTranslateLabel || false;
        this.labelName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.label : 'label';
        this.valueName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.value : 'value';
        let newCollection = this.columnDef.filter.collection || [];
        // user might want to filter certain items of the collection
        if (this.gridOptions.params && this.columnDef.filter.collectionFilterBy) {
            const filterBy = this.columnDef.filter.collectionFilterBy;
            newCollection = this.collectionService.filterCollection(newCollection, filterBy);
        }
        // user might want to sort the collection
        if (this.columnDef.filter && this.columnDef.filter.collectionSortBy) {
            const sortBy = this.columnDef.filter.collectionSortBy;
            newCollection = this.collectionService.sortCollection(newCollection, sortBy, this.enableTranslateLabel);
        }
        // step 1, create HTML string template
        const filterTemplate = this.buildTemplateHtmlString(newCollection);
        // step 2, create the DOM Element of the filter & pre-load search terms
        // also subscribe to the onClose event
        this.createDomElement(filterTemplate);
    }
    /**
     * Clear the filter values
     */
    clear() {
        if (this.$filterElm && this.$filterElm.multipleSelect) {
            // reload the filter element by it's id, to make sure it's still a valid element (because of some issue in the GraphQL example)
            // this.$filterElm = $(`#${this.$filterElm[0].id}`);
            this.$filterElm.multipleSelect('setSelects', []);
            this.$filterElm.removeClass('filled');
            this.callback(undefined, { columnDef: this.columnDef, clearFilterTriggered: true });
        }
    }
    /**
     * destroy the filter
     */
    destroy() {
        if (this.$filterElm) {
            this.$filterElm.off().remove();
        }
    }
    /**
     * Set value(s) on the DOM element
     */
    setValues(values) {
        if (values) {
            this.$filterElm.multipleSelect('setSelects', values);
        }
    }
    //
    // private functions
    // ------------------
    /**
     * Create the HTML template as a string
     */
    buildTemplateHtmlString(optionCollection) {
        let options = '';
        optionCollection.forEach((option) => {
            if (!option || (option[this.labelName] === undefined && option.labelKey === undefined)) {
                throw new Error(`A collection with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: model: Filters.multipleSelect, collection: [ { value: '1', label: 'One' } ]')`);
            }
            const labelKey = (option.labelKey || option[this.labelName]);
            const selected = (this.findValueInSearchTerms(option[this.valueName]) >= 0) ? 'selected' : '';
            const textLabel = ((option.labelKey || this.enableTranslateLabel) && this.i18n && typeof this.i18n.tr === 'function') ? this.i18n.tr(labelKey || ' ') : labelKey;
            // html text of each select option
            options += `<option value="${option[this.valueName]}" ${selected}>${textLabel}</option>`;
            // if there's a search term, we will add the "filled" class for styling purposes
            if (selected) {
                this.isFilled = true;
            }
        });
        return `<select class="ms-filter search-filter" multiple="multiple">${options}</select>`;
    }
    /**
     * From the html template string, create a DOM element
     * Subscribe to the onClose event and run the callback when that happens
     * @param filterTemplate
     */
    createDomElement(filterTemplate) {
        const $headerElm = this.grid.getHeaderRowColumn(this.columnDef.id);
        $($headerElm).empty();
        // create the DOM element & add an ID and filter class
        this.$filterElm = $(filterTemplate);
        if (typeof this.$filterElm.multipleSelect !== 'function') {
            throw new Error(`multiple-select.js was not found, make sure to read the HOWTO Wiki on how to install it`);
        }
        this.$filterElm.attr('id', `filter-${this.columnDef.id}`);
        this.$filterElm.data('columnId', this.columnDef.id);
        // if there's a search term, we will add the "filled" class for styling purposes
        if (this.isFilled) {
            this.$filterElm.addClass('filled');
        }
        // append the new DOM element to the header row
        if (this.$filterElm && typeof this.$filterElm.appendTo === 'function') {
            this.$filterElm.appendTo($headerElm);
        }
        // merge options & attach multiSelect
        const filterOptions = (this.columnDef.filter) ? this.columnDef.filter.filterOptions : {};
        const options = Object.assign({}, this.defaultOptions, filterOptions);
        this.$filterElm = this.$filterElm.multipleSelect(options);
    }
    findValueInSearchTerms(value) {
        if (this.searchTerms && Array.isArray(this.searchTerms)) {
            for (let i = 0; i < this.searchTerms.length; i++) {
                if (this.searchTerms[i] && this.searchTerms[i] === value) {
                    return i;
                }
            }
        }
        return -1;
    }
    subscribeOnClose() {
        this.$filterElm.multipleSelect({
            onClose: () => {
                const selectedItems = this.$filterElm.multipleSelect('getSelects');
                this.callback(undefined, { columnDef: this.columnDef, operator: 'IN', searchTerms: selectedItems });
            }
        });
    }
};
MultipleSelectFilter = __decorate([
    inject(CollectionService, I18N)
], MultipleSelectFilter);
export { MultipleSelectFilter };
//# sourceMappingURL=multipleSelectFilter.js.map