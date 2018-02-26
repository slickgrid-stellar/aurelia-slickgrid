import { I18N } from 'aurelia-i18n';
/** Takes a cell value and translates it (i18n). Requires an instance of the I18N Service:: `params: { i18n: this.i18n } */
export var translateFormatter = function (row, cell, value, columnDef, dataContext, grid) {
    var gridOptions = (grid && typeof grid.getOptions === 'function') ? grid.getOptions() : {};
    var columnParams = columnDef.params || {};
    var gridParams = gridOptions.params || {};
    if ((!columnParams.i18n || !(columnParams.i18n instanceof I18N)) && (!gridParams.i18n || !(gridParams.i18n instanceof I18N))) {
        throw new Error("The translate formatter requires the \"I18N\" Service to be provided as a Column Definition params or a Grid Option params.\n    For example: this.gridOptions = { enableTranslate: true, params: { i18n: this.i18n }}");
    }
    var translate = gridParams.i18n || columnParams.i18n;
    // make sure the value is a string (for example a boolean value would throw an error)
    if (value !== undefined && typeof value !== 'string') {
        value = value + '';
    }
    return value ? translate.tr(value) : '';
};
//# sourceMappingURL=translateFormatter.js.map