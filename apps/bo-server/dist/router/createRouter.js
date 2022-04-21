"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const server_1 = require("@trpc/server");
function createRouter() {
    return (0, server_1.router)();
}
exports.createRouter = createRouter;
