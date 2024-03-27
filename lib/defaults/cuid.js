"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCuid = void 0;
const pad_1 = __importDefault(require("../utils/pad"));
let ciud_cache = 0;
// Format from: https://cuid.marcoonroad.dev/
const Cuid = () => {
    ciud_cache++;
    return `c00p6qup2${(0, pad_1.default)(String(ciud_cache), 4)}ckkzslahp5pn`;
};
function ResetCuid() {
    ciud_cache = 0;
}
exports.ResetCuid = ResetCuid;
exports.default = Cuid;
