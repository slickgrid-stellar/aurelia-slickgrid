define(["require", "exports", "../models/index", "./filterUtilities"], function (require, exports, index_1, filterUtilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringFilterCondition = function (options) {
        // make sure the cell value is a string by casting it when possible
        options.cellValue = (options.cellValue === undefined || options.cellValue === null) ? '' : options.cellValue.toString();
        // make both the cell value and search value lower for case insensitive comparison
        var cellValue = options.cellValue.toLowerCase();
        var searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0]) || '';
        if (typeof searchTerm === 'string') {
            searchTerm = searchTerm.toLowerCase();
        }
        if (options.operator === '*' || options.operator === index_1.OperatorType.endsWith) {
            return cellValue.endsWith(searchTerm);
        }
        else if ((options.operator === '' && options.cellValueLastChar === '*') || options.operator === index_1.OperatorType.startsWith) {
            return cellValue.startsWith(searchTerm);
        }
        else if (options.operator === '') {
            return cellValue.includes(searchTerm);
        }
        return filterUtilities_1.testFilterCondition(options.operator || '==', cellValue, searchTerm);
    };
});
//# sourceMappingURL=stringFilterCondition.js.map