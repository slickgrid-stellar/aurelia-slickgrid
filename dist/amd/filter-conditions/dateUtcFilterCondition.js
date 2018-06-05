define(["require", "exports", "./../services/utilities", "./filterUtilities", "moment"], function (require, exports, utilities_1, filterUtilities_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dateUtcFilterCondition = function (options) {
        var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
        var searchDateFormat = utilities_1.mapMomentDateFormatWithFieldType(options.filterSearchType || options.fieldType);
        if (searchTerm === null || searchTerm === '' || !moment(options.cellValue, moment.ISO_8601).isValid() || !moment(searchTerm, searchDateFormat, true).isValid()) {
            return false;
        }
        var dateCell = moment(options.cellValue, moment.ISO_8601, true);
        var dateSearch = moment(searchTerm, searchDateFormat, true);
        // run the filter condition with date in Unix Timestamp format
        return filterUtilities_1.testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
    };
});
//# sourceMappingURL=dateUtcFilterCondition.js.map