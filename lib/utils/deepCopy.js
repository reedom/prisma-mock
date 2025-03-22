"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
function deepCopy(source) {
    if (Object(source) !== source) {
        // primitive
        return source;
    }
    else if (Array.isArray(source)) {
        return source.map(deepCopy);
    }
    else if (source instanceof Date) {
        return new Date(source);
    }
    return Object.fromEntries(Object.entries(source).map(([k, v]) => ([k, deepCopy(v)])));
}
exports.deepCopy = deepCopy;
