System.register(["./arrayToCsvFormatter", "./checkboxFormatter", "./checkmarkFormatter", "./complexObjectFormatter", "./dateIsoFormatter", "./dateTimeIsoAmPmFormatter", "./dateTimeUsAmPmFormatter", "./dateTimeUsFormatter", "./dateUsFormatter", "./deleteIconFormatter", "./editIconFormatter", "./hyperlinkFormatter", "./infoIconFormatter", "./lowercaseFormatter", "./multipleFormatter", "./percentCompleteFormatter", "./percentCompleteBarFormatter", "./progressBarFormatter", "./translateFormatter", "./translateBooleanFormatter", "./uppercaseFormatter", "./yesNoFormatter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var arrayToCsvFormatter_1, checkboxFormatter_1, checkmarkFormatter_1, complexObjectFormatter_1, dateIsoFormatter_1, dateTimeIsoAmPmFormatter_1, dateTimeUsAmPmFormatter_1, dateTimeUsFormatter_1, dateUsFormatter_1, deleteIconFormatter_1, editIconFormatter_1, hyperlinkFormatter_1, infoIconFormatter_1, lowercaseFormatter_1, multipleFormatter_1, percentCompleteFormatter_1, percentCompleteBarFormatter_1, progressBarFormatter_1, translateFormatter_1, translateBooleanFormatter_1, uppercaseFormatter_1, yesNoFormatter_1, Formatters;
    return {
        setters: [
            function (arrayToCsvFormatter_1_1) {
                arrayToCsvFormatter_1 = arrayToCsvFormatter_1_1;
            },
            function (checkboxFormatter_1_1) {
                checkboxFormatter_1 = checkboxFormatter_1_1;
            },
            function (checkmarkFormatter_1_1) {
                checkmarkFormatter_1 = checkmarkFormatter_1_1;
            },
            function (complexObjectFormatter_1_1) {
                complexObjectFormatter_1 = complexObjectFormatter_1_1;
            },
            function (dateIsoFormatter_1_1) {
                dateIsoFormatter_1 = dateIsoFormatter_1_1;
            },
            function (dateTimeIsoAmPmFormatter_1_1) {
                dateTimeIsoAmPmFormatter_1 = dateTimeIsoAmPmFormatter_1_1;
            },
            function (dateTimeUsAmPmFormatter_1_1) {
                dateTimeUsAmPmFormatter_1 = dateTimeUsAmPmFormatter_1_1;
            },
            function (dateTimeUsFormatter_1_1) {
                dateTimeUsFormatter_1 = dateTimeUsFormatter_1_1;
            },
            function (dateUsFormatter_1_1) {
                dateUsFormatter_1 = dateUsFormatter_1_1;
            },
            function (deleteIconFormatter_1_1) {
                deleteIconFormatter_1 = deleteIconFormatter_1_1;
            },
            function (editIconFormatter_1_1) {
                editIconFormatter_1 = editIconFormatter_1_1;
            },
            function (hyperlinkFormatter_1_1) {
                hyperlinkFormatter_1 = hyperlinkFormatter_1_1;
            },
            function (infoIconFormatter_1_1) {
                infoIconFormatter_1 = infoIconFormatter_1_1;
            },
            function (lowercaseFormatter_1_1) {
                lowercaseFormatter_1 = lowercaseFormatter_1_1;
            },
            function (multipleFormatter_1_1) {
                multipleFormatter_1 = multipleFormatter_1_1;
            },
            function (percentCompleteFormatter_1_1) {
                percentCompleteFormatter_1 = percentCompleteFormatter_1_1;
            },
            function (percentCompleteBarFormatter_1_1) {
                percentCompleteBarFormatter_1 = percentCompleteBarFormatter_1_1;
            },
            function (progressBarFormatter_1_1) {
                progressBarFormatter_1 = progressBarFormatter_1_1;
            },
            function (translateFormatter_1_1) {
                translateFormatter_1 = translateFormatter_1_1;
            },
            function (translateBooleanFormatter_1_1) {
                translateBooleanFormatter_1 = translateBooleanFormatter_1_1;
            },
            function (uppercaseFormatter_1_1) {
                uppercaseFormatter_1 = uppercaseFormatter_1_1;
            },
            function (yesNoFormatter_1_1) {
                yesNoFormatter_1 = yesNoFormatter_1_1;
            }
        ],
        execute: function () {
            /*
            export interface GroupFormatter {
              (row: number, cell: number, value: any, columnDef: Column, dataContext: Group): string
            }
            export interface GroupTotalsFormatter {
              (row: number, cell: number, value: any, columnDef: Column, dataContext: GroupTotals): string
            }
            */
            /** Provides a list of different Formatters that will change the cell value displayed in the UI */
            exports_1("Formatters", Formatters = {
                /** Takes an array of string and converts it to a comma delimited string */
                arrayToCsv: arrayToCsvFormatter_1.arrayToCsvFormatter,
                /** When value is filled (true), it will display a checkbox Unicode icon */
                checkbox: checkboxFormatter_1.checkboxFormatter,
                /** When value is filled (true), it will display a Font-Awesome icon (fa-check) */
                checkmark: checkmarkFormatter_1.checkmarkFormatter,
                /** Takes a complex data object and return the data under that property (for example: "user.firstName" will return the first name "John") */
                complexObject: complexObjectFormatter_1.complexObjectFormatter,
                /** Takes a Date object and displays it as an ISO Date format */
                dateIso: dateIsoFormatter_1.dateIsoFormatter,
                /** Takes a Date object and displays it as an ISO Date+Time format */
                dateTimeIso: dateIsoFormatter_1.dateIsoFormatter,
                /** Takes a Date object and displays it as an ISO Date+Time+(am/pm) format */
                dateTimeIsoAmPm: dateTimeIsoAmPmFormatter_1.dateTimeIsoAmPmFormatter,
                /** Takes a Date object and displays it as an US Date format */
                dateUs: dateUsFormatter_1.dateUsFormatter,
                /** Takes a Date object and displays it as an US Date+Time format */
                dateTimeUs: dateTimeUsFormatter_1.dateTimeUsFormatter,
                /** Takes a Date object and displays it as an US Date+Time+(am/pm) format */
                dateTimeUsAmPm: dateTimeUsAmPmFormatter_1.dateTimeUsAmPmFormatter,
                /** Displays a Font-Awesome delete icon (fa-trash) */
                deleteIcon: deleteIconFormatter_1.deleteIconFormatter,
                /** Displays a Font-Awesome edit icon (fa-pencil) */
                editIcon: editIconFormatter_1.editIconFormatter,
                /** Takes a cell value and transforms it into an hyperlink, given that the value starts with 1 of these (http|ftp|https) */
                hyperlink: hyperlinkFormatter_1.hyperlinkFormatter,
                /** Displays a Font-Awesome edit icon (fa-info-circle) */
                infoIcon: infoIconFormatter_1.infoIconFormatter,
                /** Takes a value and displays it all lowercase */
                lowercase: lowercaseFormatter_1.lowercaseFormatter,
                /**
                 * You can pipe multiple formatters (executed in sequence), use params to pass the list of formatters. For example::
                 * { field: 'title', formatter: Formatters.multiple, params: { formatters: [ Formatters.lowercase, Formatters.uppercase ] }
                 */
                multiple: multipleFormatter_1.multipleFormatter,
                /** Takes a cell value number (between 0-100) and displays a red (<50) or green (>=50) bar */
                percentComplete: percentCompleteFormatter_1.percentCompleteFormatter,
                /** Takes a cell value number (between 0-100) and displays Bootstrap "percent-complete-bar" a red (<30), silver (>30 & <70) or green (>=70) bar */
                percentCompleteBar: percentCompleteBarFormatter_1.percentCompleteBarFormatter,
                /** Takes a cell value number (between 0-100) and displays Bootstrap "progress-bar" a red (<30), silver (>30 & <70) or green (>=70) bar */
                progressBar: progressBarFormatter_1.progressBarFormatter,
                /** Takes a cell value and translates it (i18n). Requires an instance of the Translate Service:: `params: { i18n: this.translate } */
                translate: translateFormatter_1.translateFormatter,
                /** Takes a boolean value, cast it to upperCase string and finally translates it (i18n). */
                translateBoolean: translateBooleanFormatter_1.translateBooleanFormatter,
                /** Takes a value and displays it all uppercase */
                uppercase: uppercaseFormatter_1.uppercaseFormatter,
                /** Takes a boolean value and display a string 'Yes' or 'No' */
                yesNo: yesNoFormatter_1.yesNoFormatter
            });
        }
    };
});
//# sourceMappingURL=index.js.map