"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetUuid = ResetUuid;
const pad_1 = __importDefault(require("../utils/pad"));
let uuid_cache = 0;
// https://en.wikipedia.org/wiki/Universally_unique_identifier
const Uuid = () => {
    uuid_cache++;
    return `123e4567-e89b-12d3-a456-${(0, pad_1.default)(String(uuid_cache), 12)}`;
};
function ResetUuid() {
    uuid_cache = 0;
}
exports.default = Uuid;
