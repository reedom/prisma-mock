"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = autoincrement;
exports.reset = reset;
let autoincrement_cache = {};
function autoincrement(prop, field, data = {}) {
    const key = `${prop}_${field.name}`;
    let m = autoincrement_cache?.[key];
    if (field.type === 'BigInt') {
        if (m === undefined) {
            m = 0n;
            data[prop].forEach((item) => {
                m = m > item[field.name] ? m : item[field.name];
            });
        }
        m = m + 1n;
        autoincrement_cache[key] = m;
    }
    else {
        if (m === undefined) {
            m = 0;
            data[prop].forEach((item) => {
                m = Math.max(m, item[field.name]);
            });
        }
        m = m + 1;
        autoincrement_cache[key] = m;
    }
    return m;
}
function reset() {
    autoincrement_cache = {};
}
