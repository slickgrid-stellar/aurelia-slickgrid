System.register(["aurelia-framework", "../slickgrid-config"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, slickgrid_config_1, FilterFactory;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (slickgrid_config_1_1) {
                slickgrid_config_1 = slickgrid_config_1_1;
            }
        ],
        execute: function () {
            FilterFactory = /** @class */ (function () {
                /**
                 * Creates an instance of the FilterFactory class
                 * @param {Container} container the Aurelia container
                 * @param {SlickgridConfig} config the slickgrid configuration settings
                 */
                function FilterFactory(container, config) {
                    this.container = container;
                    this.config = config;
                    this._options = config.options;
                }
                /**
                 * Creates a new Filter from the provided ColumnFilter or fallbacks to the default filter
                 * @param {columnFilter} a ColumnFilter object
                 * @return {Filter} the new Filter
                 */
                FilterFactory.prototype.createFilter = function (columnFilter) {
                    var filter;
                    if (columnFilter && columnFilter.model) {
                        // the model either needs to be retrieved or is already instantiated
                        filter = typeof columnFilter.model === 'function' ? this.container.get(columnFilter.model) : columnFilter.model;
                    }
                    // fallback to the default filter
                    if (!filter && this._options.defaultFilter) {
                        filter = this.container.get(this._options.defaultFilter);
                    }
                    return filter;
                };
                FilterFactory = __decorate([
                    aurelia_framework_1.inject(aurelia_framework_1.Container, slickgrid_config_1.SlickgridConfig)
                ], FilterFactory);
                return FilterFactory;
            }());
            exports_1("FilterFactory", FilterFactory);
        }
    };
});
//# sourceMappingURL=filterFactory.js.map