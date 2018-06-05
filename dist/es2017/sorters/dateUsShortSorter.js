import { mapMomentDateFormatWithFieldType } from './../services/utilities';
import { FieldType } from './../models/index';
import { compareDates } from './compareDateUtility';
const FORMAT = mapMomentDateFormatWithFieldType(FieldType.dateUsShort);
export const dateUsShortSorter = (value1, value2, sortDirection) => {
    return compareDates(value1, value2, sortDirection, FORMAT, true);
};
//# sourceMappingURL=dateUsShortSorter.js.map