"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNestedValue(keys, values) {
    const keysCopy = [...keys];
    let key;
    let object = values;
    while ((key = keysCopy.shift())) {
        if (Array.isArray(object)) {
            object = object?.[parseInt(key)];
        }
        else {
            object = object?.[key];
        }
    }
    return object;
}
exports.default = getNestedValue;
