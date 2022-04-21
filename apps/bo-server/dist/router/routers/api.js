"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const zod_1 = require("zod");
const createRouter_1 = require("../createRouter");
exports.apiRouter = (0, createRouter_1.createRouter)()
    .query("version", {
    resolve() {
        return { version: "0.42.0" };
    },
})
    .query("hello", {
    input: zod_1.z
        .object({
        username: zod_1.z.string().nullish(),
    })
        .nullish(),
    resolve({ input, ctx }) {
        return {
            text: `hello ${input?.username ?? ctx.user?.name ?? "world"}`,
        };
    },
});
