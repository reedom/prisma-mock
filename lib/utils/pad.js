"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pad(s, size) {
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}
exports.default = pad;
