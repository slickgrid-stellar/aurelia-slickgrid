"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
exports.mapDateFormatByFieldType = function (fieldType) {
    switch (fieldType) {
        case models_1.FieldType.dateUs:
            return 'M/D/YYYY';
        case models_1.FieldType.dateTimeUs:
            return 'M/D/YYYY h:m:s';
        case models_1.FieldType.dateUsShort:
            return 'M/D/YY';
        case models_1.FieldType.dateTimeUsShort:
            return 'M/D/YY h:m:s';
        case models_1.FieldType.dateTimeIso:
            return 'YYYY-MM-DD h:m:s';
        case models_1.FieldType.dateIso:
        default:
            return 'YYYY-MM-DD';
    }
};
exports.testFilterCondition = function (operator, value1, value2) {
    switch (operator) {
        case '<': return (value1 < value2);
        case '<=': return (value1 <= value2);
        case '>': return (value1 > value2);
        case '>=': return (value1 >= value2);
        case '!=':
        case '<>': return (value1 !== value2);
        case '=':
        case '==': return (value1 === value2);
    }
    return true;
};
//# sourceMappingURL=filterUtilities.js.map