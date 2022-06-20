"use strict";
exports.__esModule = true;
exports.chainError = void 0;
var chainError = function (text) { return ({
    code: 4,
    message: {
        title: "Error",
        subtitle: "Chain error",
        text: text
    }
}); };
exports.chainError = chainError;
