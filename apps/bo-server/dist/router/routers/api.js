"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const zod_1 = require("zod");
const createRouter_1 = require("../createRouter");
const goCreateFruitInDb_1 = require("../../goCreateFruitInDb");
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
        console.log("hello Called");
        return {
            text: `hello ${input?.username ?? ctx.user?.name ?? "world"}`,
        };
    },
})
    .mutation("create", {
    input: zod_1.z.object({
        name: zod_1.z.string(),
        color: zod_1.z.string(),
    }),
    resolve({ input, ctx }) {
        console.log("input", input);
        return (0, goCreateFruitInDb_1.goCreateFruitInDb)(input);
    },
});
