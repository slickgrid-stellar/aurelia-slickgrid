System.register(["jquery", "./../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var $, index_1, TextEditor;
    return {
        setters: [
            function ($_1) {
                $ = $_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*
             * An example of a 'detached' editor.
             * KeyDown events are also handled to provide handling for Tab, Shift-Tab, Esc and Ctrl-Enter.
             */
            TextEditor = /** @class */ (function () {
                function TextEditor(args) {
                    this.args = args;
                    this.init();
                }
                TextEditor.prototype.init = function () {
                    this.$input = $("<input type=\"text\" class=\"editor-text\" />")
                        .appendTo(this.args.container)
                        .on('keydown.nav', function (e) {
                        if (e.keyCode === index_1.KeyCode.LEFT || e.keyCode === index_1.KeyCode.RIGHT) {
                            e.stopImmediatePropagation();
                        }
                    })
                        .focus()
                        .select();
                };
                TextEditor.prototype.destroy = function () {
                    this.$input.remove();
                };
                TextEditor.prototype.focus = function () {
                    this.$input.focus();
                };
                TextEditor.prototype.getValue = function () {
                    return this.$input.val();
                };
                TextEditor.prototype.setValue = function (val) {
                    this.$input.val(val);
                };
                TextEditor.prototype.loadValue = function (item) {
                    this.defaultValue = item[this.args.column.field] || '';
                    this.$input.val(this.defaultValue);
                    this.$input[0].defaultValue = this.defaultValue;
                    this.$input.select();
                };
                TextEditor.prototype.serializeValue = function () {
                    return this.$input.val();
                };
                TextEditor.prototype.applyValue = function (item, state) {
                    item[this.args.column.field] = state;
                };
                TextEditor.prototype.isValueChanged = function () {
                    return (!(this.$input.val() === '' && this.defaultValue === null)) && (this.$input.val() !== this.defaultValue);
                };
                TextEditor.prototype.validate = function () {
                    if (this.args.column.validator) {
                        var validationResults = this.args.column.validator(this.$input.val());
                        if (!validationResults.valid) {
                            return validationResults;
                        }
                    }
                    return {
                        valid: true,
                        msg: null
                    };
                };
                return TextEditor;
            }());
            exports_1("TextEditor", TextEditor);
        }
    };
});
//# sourceMappingURL=textEditor.js.map