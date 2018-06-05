var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-i18n", "./../models/index", "./export.service", "./filter.service", "./sort.service", "./../services/utilities", "jquery"], function (require, exports, aurelia_framework_1, aurelia_i18n_1, index_1, export_service_1, filter_service_1, sort_service_1, utilities_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlAndPluginService = /** @class */ (function () {
        function ControlAndPluginService(exportService, filterService, i18n, sortService) {
            this.exportService = exportService;
            this.filterService = filterService;
            this.i18n = i18n;
            this.sortService = sortService;
            this.areVisibleColumnDifferent = false;
            this.extensionList = [];
        }
        Object.defineProperty(ControlAndPluginService.prototype, "_gridOptions", {
            /** Getter for the Grid Options pulled through the Grid Object */
            get: function () {
                return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlAndPluginService.prototype, "_columnDefinitions", {
            /** Getter for the Column Definitions pulled through the Grid Object */
            get: function () {
                return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
            },
            enumerable: true,
            configurable: true
        });
        /** Auto-resize all the column in the grid to fit the grid width */
        ControlAndPluginService.prototype.autoResizeColumns = function () {
            this._grid.autosizeColumns();
        };
        /** Get all columns (includes visible and non-visible) */
        ControlAndPluginService.prototype.getAllColumns = function () {
            return this.allColumns || [];
        };
        /** Get only visible columns */
        ControlAndPluginService.prototype.getVisibleColumns = function () {
            return this.visibleColumns || [];
        };
        /** Get all Extensions */
        ControlAndPluginService.prototype.getAllExtensions = function () {
            return this.extensionList;
        };
        /**
         * Get an Extension by it's name
         *  @param name
         */
        ControlAndPluginService.prototype.getExtensionByName = function (name) {
            return this.extensionList.find(function (p) { return p.name === name; });
        };
        /**
         * Attach/Create different Controls or Plugins after the Grid is created
         * @param grid
         * @param dataView
         * @param groupItemMetadataProvider
         */
        ControlAndPluginService.prototype.attachDifferentControlOrPlugins = function (grid, dataView, groupItemMetadataProvider) {
            var _this = this;
            this._grid = grid;
            this._dataView = dataView;
            this.allColumns = this._columnDefinitions;
            this.visibleColumns = this._columnDefinitions;
            // make sure all columns are translated before creating ColumnPicker/GridMenu Controls
            // this is to avoid having hidden columns not being translated on first load
            if (this._gridOptions.enableTranslate) {
                for (var _i = 0, _a = this.allColumns; _i < _a.length; _i++) {
                    var column = _a[_i];
                    if (column.headerKey) {
                        column.name = this.i18n.tr(column.headerKey);
                    }
                }
            }
            // Column Picker Control
            if (this._gridOptions.enableColumnPicker) {
                this.columnPickerControl = this.createColumnPicker(grid, this._columnDefinitions);
                this.extensionList.push({ name: 'ColumnPicker', service: this.columnPickerControl });
            }
            // Grid Menu Control
            if (this._gridOptions.enableGridMenu) {
                this.gridMenuControl = this.createGridMenu(grid, this._columnDefinitions);
                this.extensionList.push({ name: 'GridMenu', service: this.gridMenuControl });
            }
            // Auto Tooltip Plugin
            if (this._gridOptions.enableAutoTooltip) {
                this.autoTooltipPlugin = new Slick.AutoTooltips(this._gridOptions.autoTooltipOptions || {});
                grid.registerPlugin(this.autoTooltipPlugin);
                this.extensionList.push({ name: 'AutoTooltip', service: this.autoTooltipPlugin });
            }
            // Grouping Plugin
            // register the group item metadata provider to add expand/collapse group handlers
            if (this._gridOptions.enableGrouping) {
                this.groupItemMetaProviderPlugin = groupItemMetadataProvider || {};
                this._grid.registerPlugin(this.groupItemMetaProviderPlugin);
                this.extensionList.push({ name: 'GroupItemMetaProvider', service: this.groupItemMetaProviderPlugin });
            }
            // Checkbox Selector Plugin
            if (this._gridOptions.enableCheckboxSelector) {
                // when enabling the Checkbox Selector Plugin, we need to also watch onClick events to perform certain actions
                // the selector column has to be created BEFORE the grid (else it behaves oddly), but we can only watch grid events AFTER the grid is created
                grid.registerPlugin(this.checkboxSelectorPlugin);
                this.extensionList.push({ name: 'CheckboxSelector', service: this.checkboxSelectorPlugin });
                // this also requires the Row Selection Model to be registered as well
                if (!this.rowSelectionPlugin || !grid.getSelectionModel()) {
                    this.rowSelectionPlugin = new Slick.RowSelectionModel(this._gridOptions.rowSelectionOptions || {});
                    grid.setSelectionModel(this.rowSelectionPlugin);
                }
                // user might want to pre-select some rows
                // the setTimeout is because of timing issue with styling (row selection happen but rows aren't highlighted properly)
                if (this._gridOptions.preselectedRows && this.rowSelectionPlugin && grid.getSelectionModel()) {
                    setTimeout(function () { return _this.checkboxSelectorPlugin.selectRows(_this._gridOptions.preselectedRows); }, 0);
                }
            }
            // Row Selection Plugin
            if (!this._gridOptions.enableCheckboxSelector && this._gridOptions.enableRowSelection) {
                this.rowSelectionPlugin = new Slick.RowSelectionModel(this._gridOptions.rowSelectionOptions || {});
                grid.setSelectionModel(this.rowSelectionPlugin);
            }
            // Header Button Plugin
            if (this._gridOptions.enableHeaderButton) {
                this.headerButtonsPlugin = new Slick.Plugins.HeaderButtons(this._gridOptions.headerButton || {});
                grid.registerPlugin(this.headerButtonsPlugin);
                this.extensionList.push({ name: 'HeaderButtons', service: this.headerButtonsPlugin });
                this.headerButtonsPlugin.onCommand.subscribe(function (e, args) {
                    if (_this._gridOptions.headerButton && typeof _this._gridOptions.headerButton.onCommand === 'function') {
                        _this._gridOptions.headerButton.onCommand(e, args);
                    }
                });
            }
            // Header Menu Plugin
            if (this._gridOptions.enableHeaderMenu) {
                this.headerMenuPlugin = this.createHeaderMenu(this._grid, this._dataView, this._columnDefinitions);
            }
            // Cell External Copy Manager Plugin (Excel Like)
            if (this._gridOptions.enableExcelCopyBuffer) {
                this.createUndoRedoBuffer();
                this.hookUndoShortcutKey();
                this.createCellExternalCopyManagerPlugin(this._grid);
            }
            // manually register other plugins
            if (this._gridOptions.registerPlugins !== undefined) {
                if (Array.isArray(this._gridOptions.registerPlugins)) {
                    this._gridOptions.registerPlugins.forEach(function (plugin) {
                        grid.registerPlugin(plugin);
                        _this.extensionList.push({ name: 'generic', service: plugin });
                    });
                }
                else {
                    grid.registerPlugin(this._gridOptions.registerPlugins);
                    this.extensionList.push({ name: 'generic', service: this._gridOptions.registerPlugins });
                }
            }
        };
        /**
         * Attach/Create different plugins before the Grid creation.
         * For example the multi-select have to be added to the column definition before the grid is created to work properly
         * @param columnDefinitions
         * @param options
         */
        ControlAndPluginService.prototype.createPluginBeforeGridCreation = function (columnDefinitions, options) {
            if (options.enableCheckboxSelector) {
                this.checkboxSelectorPlugin = new Slick.CheckboxSelectColumn(options.checkboxSelector || {});
                var selectionColumn = this.checkboxSelectorPlugin.getColumnDefinition();
                selectionColumn.excludeFromExport = true;
                selectionColumn.excludeFromQuery = true;
                selectionColumn.excludeFromHeaderMenu = true;
                columnDefinitions.unshift(selectionColumn);
            }
        };
        /** Create the Excel like copy manager */
        ControlAndPluginService.prototype.createCellExternalCopyManagerPlugin = function (grid) {
            var _this = this;
            var newRowIds = 0;
            var pluginOptions = {
                clipboardCommandHandler: function (editCommand) {
                    _this.undoRedoBuffer.queueAndExecuteCommand.call(_this.undoRedoBuffer, editCommand);
                },
                dataItemColumnValueExtractor: function (item, columnDef) {
                    // when grid or cell is not editable, we will possibly evaluate the Formatter if it was passed
                    // to decide if we evaluate the Formatter, we will use the same flag from Export which is "exportWithFormatter"
                    if (_this._gridOptions && (!_this._gridOptions.editable || !columnDef.editor)) {
                        var exportOptionWithFormatter = (_this._gridOptions && _this._gridOptions.exportOptions) ? _this._gridOptions.exportOptions.exportWithFormatter : false;
                        var isEvaluatingFormatter = (columnDef.exportWithFormatter !== undefined) ? columnDef.exportWithFormatter : exportOptionWithFormatter;
                        if (columnDef.formatter && isEvaluatingFormatter) {
                            var formattedOutput = columnDef.formatter(0, 0, item[columnDef.field], columnDef, item, _this._grid);
                            if (columnDef.sanitizeDataExport || (_this._gridOptions.exportOptions && _this._gridOptions.exportOptions.sanitizeDataExport)) {
                                return utilities_1.sanitizeHtmlToText(formattedOutput);
                            }
                            return formattedOutput;
                        }
                    }
                    // else use the default "dataItemColumnValueExtractor" from the plugin itself
                    // we can do that by setting back the getter with null
                    return null;
                },
                readOnlyMode: false,
                includeHeaderWhenCopying: false,
                newRowCreator: function (count) {
                    for (var i = 0; i < count; i++) {
                        var item = {
                            id: 'newRow_' + newRowIds++
                        };
                        grid.getData().addItem(item);
                    }
                }
            };
            grid.setSelectionModel(new Slick.CellSelectionModel());
            this.cellExternalCopyManagerPlugin = new Slick.CellExternalCopyManager(pluginOptions);
            grid.registerPlugin(this.cellExternalCopyManagerPlugin);
            this.extensionList.push({ name: 'CellExternalCopyManager', service: this.cellExternalCopyManagerPlugin });
        };
        /**
         * Create the Column Picker and expose all the available hooks that user can subscribe (onColumnsChanged)
         * @param grid
         * @param columnDefinitions
         */
        ControlAndPluginService.prototype.createColumnPicker = function (grid, columnDefinitions) {
            var _this = this;
            // localization support for the picker
            var forceFitTitle = this._gridOptions.enableTranslate ? this.getDefaultTranslationByKey('forcefit') : 'Force fit columns';
            var syncResizeTitle = this._gridOptions.enableTranslate ? this.getDefaultTranslationByKey('synch') : 'Synchronous resize';
            this._gridOptions.columnPicker = this._gridOptions.columnPicker || {};
            this._gridOptions.columnPicker.forceFitTitle = this._gridOptions.columnPicker.forceFitTitle || forceFitTitle;
            this._gridOptions.columnPicker.syncResizeTitle = this._gridOptions.columnPicker.syncResizeTitle || syncResizeTitle;
            this.columnPickerControl = new Slick.Controls.ColumnPicker(columnDefinitions, grid, this._gridOptions);
            if (grid && this._gridOptions.enableColumnPicker) {
                this.columnPickerControl.onColumnsChanged.subscribe(function (e, args) {
                    if (_this._gridOptions.columnPicker && typeof _this._gridOptions.columnPicker.onColumnsChanged === 'function') {
                        _this._gridOptions.columnPicker.onColumnsChanged(e, args);
                    }
                });
            }
            return this.columnPickerControl;
        };
        /**
         * Create (or re-create) Grid Menu and expose all the available hooks that user can subscribe (onCommand, onMenuClose, ...)
         * @param grid
         * @param columnDefinitions
         */
        ControlAndPluginService.prototype.createGridMenu = function (grid, columnDefinitions) {
            var _this = this;
            this._gridOptions.gridMenu = __assign({}, this.getDefaultGridMenuOptions(), this._gridOptions.gridMenu);
            this.addGridMenuCustomCommands(grid);
            var gridMenuControl = new Slick.Controls.GridMenu(columnDefinitions, grid, this._gridOptions);
            if (grid && this._gridOptions.gridMenu) {
                gridMenuControl.onBeforeMenuShow.subscribe(function (e, args) {
                    if (_this._gridOptions.gridMenu && typeof _this._gridOptions.gridMenu.onBeforeMenuShow === 'function') {
                        _this._gridOptions.gridMenu.onBeforeMenuShow(e, args);
                    }
                });
                gridMenuControl.onColumnsChanged.subscribe(function (e, args) {
                    _this.areVisibleColumnDifferent = true;
                    if (_this._gridOptions.gridMenu && typeof _this._gridOptions.gridMenu.onColumnsChanged === 'function') {
                        _this._gridOptions.gridMenu.onColumnsChanged(e, args);
                    }
                });
                gridMenuControl.onCommand.subscribe(function (e, args) {
                    if (_this._gridOptions.gridMenu && typeof _this._gridOptions.gridMenu.onCommand === 'function') {
                        _this._gridOptions.gridMenu.onCommand(e, args);
                    }
                });
                gridMenuControl.onMenuClose.subscribe(function (e, args) {
                    if (_this._gridOptions.gridMenu && typeof _this._gridOptions.gridMenu.onMenuClose === 'function') {
                        _this._gridOptions.gridMenu.onMenuClose(e, args);
                    }
                    // we also want to resize the columns if the user decided to hide certain column(s)
                    if (grid && typeof grid.autosizeColumns === 'function') {
                        // make sure that the grid still exist (by looking if the Grid UID is found in the DOM tree)
                        var gridUid = grid.getUID();
                        if (_this.areVisibleColumnDifferent && gridUid && $("." + gridUid).length > 0) {
                            grid.autosizeColumns();
                            _this.areVisibleColumnDifferent = false;
                        }
                    }
                });
            }
            return gridMenuControl;
        };
        /**
         * Create the Header Menu and expose all the available hooks that user can subscribe (onCommand, onBeforeMenuShow, ...)
         * @param grid
         * @param dataView
         * @param columnDefinitions
         */
        ControlAndPluginService.prototype.createHeaderMenu = function (grid, dataView, columnDefinitions) {
            var _this = this;
            this._gridOptions.headerMenu = __assign({}, this.getDefaultHeaderMenuOptions(), this._gridOptions.headerMenu);
            if (this._gridOptions.enableHeaderMenu) {
                this._gridOptions.headerMenu = this.addHeaderMenuCustomCommands(grid, dataView, columnDefinitions);
            }
            var headerMenuPlugin = new Slick.Plugins.HeaderMenu(this._gridOptions.headerMenu);
            grid.registerPlugin(headerMenuPlugin);
            headerMenuPlugin.onCommand.subscribe(function (e, args) {
                if (_this._gridOptions.headerMenu && typeof _this._gridOptions.headerMenu.onCommand === 'function') {
                    _this._gridOptions.headerMenu.onCommand(e, args);
                }
            });
            headerMenuPlugin.onCommand.subscribe(function (e, args) {
                if (_this._gridOptions.headerMenu && typeof _this._gridOptions.headerMenu.onBeforeMenuShow === 'function') {
                    _this._gridOptions.headerMenu.onBeforeMenuShow(e, args);
                }
            });
            return headerMenuPlugin;
        };
        /** Create an undo redo buffer used by the Excel like copy */
        ControlAndPluginService.prototype.createUndoRedoBuffer = function () {
            var commandQueue = [];
            var commandCtr = 0;
            this.undoRedoBuffer = {
                queueAndExecuteCommand: function (editCommand) {
                    commandQueue[commandCtr] = editCommand;
                    commandCtr++;
                    editCommand.execute();
                },
                undo: function () {
                    if (commandCtr === 0) {
                        return;
                    }
                    commandCtr--;
                    var command = commandQueue[commandCtr];
                    if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                        command.undo();
                    }
                },
                redo: function () {
                    if (commandCtr >= commandQueue.length) {
                        return;
                    }
                    var command = commandQueue[commandCtr];
                    commandCtr++;
                    if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                        command.execute();
                    }
                }
            };
        };
        /** Hide a column from the grid */
        ControlAndPluginService.prototype.hideColumn = function (column) {
            if (this._grid && this.visibleColumns) {
                var columnIndex = this._grid.getColumnIndex(column.id);
                this.visibleColumns = this.removeColumnByIndex(this.visibleColumns, columnIndex);
                this._grid.setColumns(this.visibleColumns);
            }
        };
        /** Attach an undo shortcut key hook that will redo/undo the copy buffer */
        ControlAndPluginService.prototype.hookUndoShortcutKey = function () {
            var _this = this;
            // undo shortcut
            $(document).keydown(function (e) {
                if (e.which === 90 && (e.ctrlKey || e.metaKey)) {
                    if (e.shiftKey) {
                        _this.undoRedoBuffer.redo();
                    }
                    else {
                        _this.undoRedoBuffer.undo();
                    }
                }
            });
        };
        ControlAndPluginService.prototype.dispose = function () {
            this._grid = null;
            this._dataView = null;
            this.visibleColumns = [];
            // dispose of each control/plugin if it has a destroy method
            this.extensionList.forEach(function (item) {
                if (item && item.service && item.service.destroy) {
                    item.service.destroy();
                }
            });
            this.extensionList = [];
        };
        /**
         * Create Grid Menu with Custom Commands if user has enabled Filters and/or uses a Backend Service (OData, GraphQL)
         * @param grid
         */
        ControlAndPluginService.prototype.addGridMenuCustomCommands = function (grid) {
            var _this = this;
            var backendApi = this._gridOptions.backendServiceApi || null;
            if (this._gridOptions && this._gridOptions.enableFiltering) {
                // show grid menu: clear all filters
                if (this._gridOptions && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideClearAllFiltersCommand && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'clear-filter'; }).length === 0) {
                    this._gridOptions.gridMenu.customItems.push({
                        iconCssClass: this._gridOptions.gridMenu.iconClearAllFiltersCommand || 'fa fa-filter text-danger',
                        title: this._gridOptions.enableTranslate ? this.i18n.tr('CLEAR_ALL_FILTERS') : 'Clear All Filters',
                        disabled: false,
                        command: 'clear-filter',
                        positionOrder: 50
                    });
                }
                // show grid menu: toggle filter row
                if (this._gridOptions && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideToggleFilterCommand && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'toggle-filter'; }).length === 0) {
                    this._gridOptions.gridMenu.customItems.push({
                        iconCssClass: this._gridOptions.gridMenu.iconToggleFilterCommand || 'fa fa-random',
                        title: this._gridOptions.enableTranslate ? this.i18n.tr('TOGGLE_FILTER_ROW') : 'Toggle Filter Row',
                        disabled: false,
                        command: 'toggle-filter',
                        positionOrder: 52
                    });
                }
                // show grid menu: refresh dataset
                if (this._gridOptions && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideRefreshDatasetCommand && backendApi && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'refresh-dataset'; }).length === 0) {
                    this._gridOptions.gridMenu.customItems.push({
                        iconCssClass: this._gridOptions.gridMenu.iconRefreshDatasetCommand || 'fa fa-refresh',
                        title: this._gridOptions.enableTranslate ? this.i18n.tr('REFRESH_DATASET') : 'Refresh Dataset',
                        disabled: false,
                        command: 'refresh-dataset',
                        positionOrder: 54
                    });
                }
            }
            if (this._gridOptions.enableSorting) {
                // show grid menu: clear all sorting
                if (this._gridOptions && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideClearAllSortingCommand && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'clear-sorting'; }).length === 0) {
                    this._gridOptions.gridMenu.customItems.push({
                        iconCssClass: this._gridOptions.gridMenu.iconClearAllSortingCommand || 'fa fa-unsorted text-danger',
                        title: this._gridOptions.enableTranslate ? this.i18n.tr('CLEAR_ALL_SORTING') : 'Clear All Sorting',
                        disabled: false,
                        command: 'clear-sorting',
                        positionOrder: 51
                    });
                }
            }
            // show grid menu: export to file
            if (this._gridOptions && this._gridOptions.enableExport && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideExportCsvCommand && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'export-csv'; }).length === 0) {
                this._gridOptions.gridMenu.customItems.push({
                    iconCssClass: this._gridOptions.gridMenu.iconExportCsvCommand || 'fa fa-download',
                    title: this._gridOptions.enableTranslate ? this.i18n.tr('EXPORT_TO_CSV') : 'Export in CSV format',
                    disabled: false,
                    command: 'export-csv',
                    positionOrder: 53
                });
            }
            // show grid menu: export to text file as tab delimited
            if (this._gridOptions && this._gridOptions.enableExport && this._gridOptions.gridMenu && !this._gridOptions.gridMenu.hideExportTextDelimitedCommand && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.filter(function (item) { return item.command === 'export-text-delimited'; }).length === 0) {
                this._gridOptions.gridMenu.customItems.push({
                    iconCssClass: this._gridOptions.gridMenu.iconExportTextDelimitedCommand || 'fa fa-download',
                    title: this._gridOptions.enableTranslate ? this.i18n.tr('EXPORT_TO_TAB_DELIMITED') : 'Export in Text format (Tab delimited)',
                    disabled: false,
                    command: 'export-text-delimited',
                    positionOrder: 54
                });
            }
            // Command callback, what will be executed after command is clicked
            if (this._gridOptions && this._gridOptions.gridMenu && Array.isArray(this._gridOptions.gridMenu.customItems) && this._gridOptions.gridMenu.customItems.length > 0) {
                this._gridOptions.gridMenu.onCommand = function (e, args) {
                    if (args && args.command) {
                        switch (args.command) {
                            case 'clear-filter':
                                _this.filterService.clearFilters();
                                _this._dataView.refresh();
                                break;
                            case 'clear-sorting':
                                _this.sortService.clearSorting();
                                _this._dataView.refresh();
                                break;
                            case 'export-csv':
                                _this.exportService.exportToFile({
                                    delimiter: index_1.DelimiterType.comma,
                                    filename: 'export',
                                    format: index_1.FileType.csv,
                                    useUtf8WithBom: true
                                });
                                break;
                            case 'export-text-delimited':
                                _this.exportService.exportToFile({
                                    delimiter: index_1.DelimiterType.tab,
                                    filename: 'export',
                                    format: index_1.FileType.txt,
                                    useUtf8WithBom: true
                                });
                                break;
                            case 'toggle-filter':
                                grid.setHeaderRowVisibility(!_this._gridOptions.showHeaderRow);
                                break;
                            case 'toggle-toppanel':
                                grid.setTopPanelVisibility(!_this._gridOptions.showTopPanel);
                                break;
                            case 'refresh-dataset':
                                _this.refreshBackendDataset();
                                break;
                            default:
                                alert('Command: ' + args.command);
                                break;
                        }
                    }
                };
            }
            // add the custom "Commands" title if there are any commands
            if (this._gridOptions && this._gridOptions.gridMenu && this._gridOptions.gridMenu.customItems && this._gridOptions.gridMenu.customItems.length > 0) {
                var customTitle = this._gridOptions.enableTranslate ? this.i18n.tr('COMMANDS') : 'Commands';
                this._gridOptions.gridMenu.customTitle = this._gridOptions.gridMenu.customTitle || customTitle;
                // sort the custom items by their position in the list
                this._gridOptions.gridMenu.customItems.sort(function (itemA, itemB) {
                    if (itemA && itemB && itemA.hasOwnProperty('positionOrder') && itemB.hasOwnProperty('positionOrder')) {
                        return (itemA.positionOrder || 0) - (itemB.positionOrder || 0);
                    }
                    return 0;
                });
            }
        };
        /** Call a refresh dataset with a BackendServiceApi */
        ControlAndPluginService.prototype.refreshBackendDataset = function () {
            var query;
            var backendApi = this._gridOptions.backendServiceApi;
            if (!backendApi || !backendApi.service || !backendApi.process) {
                throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
            }
            if (backendApi.service) {
                query = backendApi.service.buildQuery();
            }
            if (query && query !== '') {
                if (backendApi.preProcess) {
                    backendApi.preProcess();
                }
                // execute the process promise
                var processPromise = backendApi.process(query);
                processPromise.then(function (processResult) {
                    // from the result, call our internal post process to update the Dataset and Pagination info
                    if (processResult && backendApi && backendApi.internalPostProcess) {
                        backendApi.internalPostProcess(processResult);
                    }
                    // send the response process to the postProcess callback
                    if (backendApi && backendApi.postProcess) {
                        backendApi.postProcess(processResult);
                    }
                });
            }
        };
        /**
         * Remove a column from the grid by it's index in the grid
         * @param array input
         * @param index
         */
        ControlAndPluginService.prototype.removeColumnByIndex = function (array, index) {
            return array.filter(function (el, i) {
                return index !== i;
            });
        };
        /** Translate the Column Picker and it's last 2 checkboxes */
        ControlAndPluginService.prototype.translateColumnPicker = function () {
            // update the properties by pointers, that is the only way to get Grid Menu Control to see the new values
            if (this._gridOptions && this._gridOptions.columnPicker) {
                this._gridOptions.columnPicker.columnTitle = this.getDefaultTranslationByKey('columns');
                this._gridOptions.columnPicker.forceFitTitle = this.getDefaultTranslationByKey('forcefit');
                this._gridOptions.columnPicker.syncResizeTitle = this.getDefaultTranslationByKey('synch');
            }
        };
        /** Translate the Grid Menu titles and column picker */
        ControlAndPluginService.prototype.translateGridMenu = function () {
            // update the properties by pointers, that is the only way to get Grid Menu Control to see the new values
            // we also need to call the control init so that it takes the new Grid object with latest values
            if (this._gridOptions && this._gridOptions.gridMenu) {
                this._gridOptions.gridMenu.customItems = [];
                this._gridOptions.gridMenu.customTitle = '';
                this._gridOptions.gridMenu.columnTitle = this.getDefaultTranslationByKey('columns');
                this._gridOptions.gridMenu.forceFitTitle = this.getDefaultTranslationByKey('forcefit');
                this._gridOptions.gridMenu.syncResizeTitle = this.getDefaultTranslationByKey('synch');
                // translate all columns (including non-visible)
                for (var _i = 0, _a = this.allColumns; _i < _a.length; _i++) {
                    var column = _a[_i];
                    if (column.headerKey) {
                        column.name = this.i18n.tr(column.headerKey);
                    }
                }
                // re-create the list of Custom Commands
                this.addGridMenuCustomCommands(this._grid);
                this.gridMenuControl.init(this._grid);
            }
        };
        /**
         * Translate the Header Menu titles, we need to loop through all column definition to re-translate them
         */
        ControlAndPluginService.prototype.translateHeaderMenu = function () {
            if (this._gridOptions && this._gridOptions.headerMenu) {
                this.resetHeaderMenuTranslations(this.visibleColumns);
            }
        };
        /**
         * Translate manually the header titles.
         * We could optionally pass a locale (that will change currently loaded locale), else it will use current locale
         * @param locale to use
         */
        ControlAndPluginService.prototype.translateColumnHeaders = function (locale, newColumnDefinitions) {
            if (locale) {
                this.i18n.setLocale(locale);
            }
            var columnDefinitions = newColumnDefinitions || this._columnDefinitions;
            for (var _i = 0, columnDefinitions_1 = columnDefinitions; _i < columnDefinitions_1.length; _i++) {
                var column = columnDefinitions_1[_i];
                if (column.headerKey) {
                    column.name = this.i18n.tr(column.headerKey);
                }
            }
            // re-render the column headers
            this.renderColumnHeaders(columnDefinitions);
        };
        /**
         * Render (or re-render) the column headers from column definitions.
         * calling setColumns() will trigger a grid re-render
         */
        ControlAndPluginService.prototype.renderColumnHeaders = function (newColumnDefinitions) {
            var collection = newColumnDefinitions || this._columnDefinitions;
            if (Array.isArray(collection) && this._grid && this._grid.setColumns) {
                this._grid.setColumns(collection);
            }
        };
        /**
         * Create Header Menu with Custom Commands if user has enabled Header Menu
         * @param grid
         * @param dataView
         * @param columnDefinitions
         * @return header menu
         */
        ControlAndPluginService.prototype.addHeaderMenuCustomCommands = function (grid, dataView, columnDefinitions) {
            var _this = this;
            var headerMenuOptions = this._gridOptions.headerMenu;
            if (columnDefinitions && Array.isArray(columnDefinitions) && this._gridOptions.enableHeaderMenu) {
                columnDefinitions.forEach(function (columnDef) {
                    if (columnDef && !columnDef.excludeFromHeaderMenu) {
                        if (!columnDef.header || !columnDef.header.menu) {
                            columnDef.header = {
                                menu: {
                                    items: []
                                }
                            };
                        }
                        if (columnDef && columnDef.header && columnDef.header.menu) {
                            var columnHeaderMenuItems = columnDef.header.menu.items || [];
                            // Sorting Commands
                            if (_this._gridOptions.enableSorting && columnDef.sortable && headerMenuOptions && headerMenuOptions.showSortCommands) {
                                if (columnHeaderMenuItems.filter(function (item) { return item.command === 'sort-asc'; }).length === 0) {
                                    columnHeaderMenuItems.push({
                                        iconCssClass: headerMenuOptions.iconSortAscCommand || 'fa fa-sort-asc',
                                        title: _this._gridOptions.enableTranslate ? _this.i18n.tr('SORT_ASCENDING') : 'Sort Ascending',
                                        command: 'sort-asc'
                                    });
                                }
                                if (columnHeaderMenuItems.filter(function (item) { return item.command === 'sort-desc'; }).length === 0) {
                                    columnHeaderMenuItems.push({
                                        iconCssClass: headerMenuOptions.iconSortDescCommand || 'fa fa-sort-desc',
                                        title: _this._gridOptions.enableTranslate ? _this.i18n.tr('SORT_DESCENDING') : 'Sort Descending',
                                        command: 'sort-desc'
                                    });
                                }
                            }
                            // Hide Column Command
                            if (headerMenuOptions && headerMenuOptions.showColumnHideCommand && columnHeaderMenuItems.filter(function (item) { return item.command === 'hide'; }).length === 0) {
                                columnHeaderMenuItems.push({
                                    iconCssClass: headerMenuOptions.iconColumnHideCommand || 'fa fa-times',
                                    title: _this._gridOptions.enableTranslate ? _this.i18n.tr('HIDE_COLUMN') : 'Hide Column',
                                    command: 'hide'
                                });
                            }
                        }
                    }
                });
                // Command callback, what will be executed after command is clicked
                if (headerMenuOptions) {
                    headerMenuOptions.onCommand = function (e, args) {
                        if (args && args.command) {
                            switch (args.command) {
                                case 'hide':
                                    _this.hideColumn(args.column);
                                    _this.autoResizeColumns();
                                    break;
                                case 'sort-asc':
                                case 'sort-desc':
                                    // get previously sorted columns
                                    var cols = _this.sortService.getPreviousColumnSorts(args.column.id + '');
                                    // add to the column array, the column sorted by the header menu
                                    cols.push({ sortCol: args.column, sortAsc: (args.command === 'sort-asc') });
                                    if (_this._gridOptions.backendServiceApi) {
                                        _this.sortService.onBackendSortChanged(e, { multiColumnSort: true, sortCols: cols, grid: grid });
                                    }
                                    else {
                                        _this.sortService.onLocalSortChanged(grid, dataView, cols);
                                    }
                                    // update the this.gridObj sortColumns array which will at the same add the visual sort icon(s) on the UI
                                    var newSortColumns = cols.map(function (col) {
                                        return {
                                            columnId: (col && col.sortCol) ? col.sortCol.id : '',
                                            sortAsc: col.sortAsc
                                        };
                                    });
                                    grid.setSortColumns(newSortColumns); // add sort icon in UI
                                    break;
                                default:
                                    alert('Command: ' + args.command);
                                    break;
                            }
                        }
                    };
                }
            }
            return headerMenuOptions;
        };
        /**
         * @return default Grid Menu options
         */
        ControlAndPluginService.prototype.getDefaultGridMenuOptions = function () {
            return {
                columnTitle: this.getDefaultTranslationByKey('columns'),
                forceFitTitle: this.getDefaultTranslationByKey('forcefit'),
                syncResizeTitle: this.getDefaultTranslationByKey('synch'),
                iconCssClass: 'fa fa-bars',
                menuWidth: 18,
                customTitle: undefined,
                customItems: [],
                hideClearAllFiltersCommand: false,
                hideRefreshDatasetCommand: false,
                hideToggleFilterCommand: false
            };
        };
        /**
         * @return default Header Menu options
         */
        ControlAndPluginService.prototype.getDefaultHeaderMenuOptions = function () {
            return {
                autoAlignOffset: 12,
                minWidth: 140,
                showColumnHideCommand: true,
                showSortCommands: true
            };
        };
        ControlAndPluginService.prototype.getDefaultTranslationByKey = function (key) {
            var output = '';
            switch (key) {
                case 'commands':
                    output = this.i18n.tr('COMMANDS') || 'Commands';
                    break;
                case 'columns':
                    output = this.i18n.tr('COLUMNS') || 'Columns';
                    break;
                case 'forcefit':
                    output = this.i18n.tr('FORCE_FIT_COLUMNS') || 'Force fit columns';
                    break;
                case 'synch':
                    output = this.i18n.tr('SYNCHRONOUS_RESIZE') || 'Synchronous resize';
                    break;
            }
            return output;
        };
        /**
         * Reset all the Grid Menu options which have text to translate
         * @param columnDefinitions
         */
        ControlAndPluginService.prototype.resetHeaderMenuTranslations = function (columnDefinitions) {
            var _this = this;
            columnDefinitions.forEach(function (columnDef) {
                if (columnDef && !columnDef.excludeFromHeaderMenu && columnDef.header && columnDef.header.menu && columnDef.header.menu.items) {
                    var columnHeaderMenuItems = columnDef.header.menu.items || [];
                    columnHeaderMenuItems.forEach(function (item) {
                        switch (item.command) {
                            case 'sort-asc':
                                item.title = _this.i18n.tr('SORT_ASCENDING') || 'Sort Ascending';
                                break;
                            case 'sort-desc':
                                item.title = _this.i18n.tr('SORT_DESCENDING') || 'Sort Ascending';
                                break;
                            case 'hide':
                                item.title = _this.i18n.tr('HIDE_COLUMN') || 'Sort Ascending';
                                break;
                        }
                    });
                }
            });
        };
        ControlAndPluginService = __decorate([
            aurelia_framework_1.singleton(true),
            aurelia_framework_1.inject(export_service_1.ExportService, filter_service_1.FilterService, aurelia_i18n_1.I18N, sort_service_1.SortService)
        ], ControlAndPluginService);
        return ControlAndPluginService;
    }());
    exports.ControlAndPluginService = ControlAndPluginService;
});
//# sourceMappingURL=controlAndPlugin.service.js.map