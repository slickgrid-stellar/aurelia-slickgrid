System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var progressBarFormatter;
    return {
        setters: [],
        execute: function () {
            exports_1("progressBarFormatter", progressBarFormatter = function (row, cell, value, columnDef, dataContext) {
                if (value === null || value === '') {
                    return '';
                }
                var color;
                if (value < 30) {
                    color = 'danger';
                }
                else if (value < 70) {
                    color = 'warning';
                }
                else {
                    color = 'success';
                }
                return "<div class=\"progress\">\n    <div class=\"progress-bar progress-bar-" + color + " bg-" + color + "\" role=\"progressbar\" aria-valuenow=\"" + value + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width: 2em; width: " + value + "%;\">\n    " + value + "%\n    </div>\n  </div>";
            });
        }
    };
});
//# sourceMappingURL=progressBarFormatter.js.map