"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowCompare = void 0;
const shallowCompare = (a, b) => {
    for (let key in b) {
        if (a[key] !== b[key])
            return false;
    }
    return true;
};
exports.shallowCompare = shallowCompare;
