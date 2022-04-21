"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const createRouter_1 = require("./createRouter");
const api_1 = require("./routers/api");
// import { postsRouter } from "./routers/posts";
// import { subRouter } from "./routers/sub";
exports.appRouter = (0, createRouter_1.createRouter)()
    // .merge("posts:", postsRouter)
    // .merge("sub:", subRouter)
    .merge(api_1.apiRouter);
