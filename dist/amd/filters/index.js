define(["require", "exports", "./inputFilter", "./multipleSelectFilter", "./selectFilter", "./singleSelectFilter", "./filterFactory"], function (require, exports, inputFilter_1, multipleSelectFilter_1, selectFilter_1, singleSelectFilter_1, filterFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Filters = {
        input: inputFilter_1.InputFilter,
        multipleSelect: multipleSelectFilter_1.MultipleSelectFilter,
        singleSelect: singleSelectFilter_1.SingleSelectFilter,
        select: selectFilter_1.SelectFilter
    };
    exports.PLUGIN_NAME = filterFactory_1.PLUGIN_NAME;
    exports.FilterFactory = filterFactory_1.FilterFactory;
});
//# sourceMappingURL=index.js.map