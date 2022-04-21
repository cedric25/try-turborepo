"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
function createContext({ req, res }) {
    const user = { name: req.headers["username"] ?? "anonymous" };
    return { req, res, user };
}
exports.createContext = createContext;
