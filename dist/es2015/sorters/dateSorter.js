import * as moment from 'moment';
import { compareDates } from './compareDateUtility';
export const dateSorter = (value1, value2, sortDirection) => {
    return compareDates(value1, value2, sortDirection, moment.ISO_8601);
};
//# sourceMappingURL=dateSorter.js.map