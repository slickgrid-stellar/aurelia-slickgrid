define(["require", "exports", "./filterUtilities"], function (require, exports, filterUtilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numberFilterCondition = function (options) {
        var cellValue = parseFloat(options.cellValue);
        var searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0]) || 0;
        if (typeof searchTerm === 'string') {
            searchTerm = parseFloat(searchTerm);
        }
        if (!searchTerm && (!options.operator || options.operator === '')) {
            return true;
        }
        return filterUtilities_1.testFilterCondition(options.operator || '==', cellValue, searchTerm);
    };
});
//# sourceMappingURL=numberFilterCondition.js.map