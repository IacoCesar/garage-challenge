"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = parseInt(process.env.APP_PORT) || 3000;
if (process.env.NODE_ENV !== 'test')
    app_1.default.listen(port);
exports.default = app_1.default;
