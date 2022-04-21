"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const fastify_2 = require("@trpc/server/adapters/fastify");
const router_1 = require("./router");
const context_1 = require("./router/context");
const PORT = 3011;
function createServer() {
    const server = (0, fastify_1.default)();
    server.register(fastify_cors_1.default);
    server.register(fastify_2.fastifyTRPCPlugin, {
        prefix: "/trpc",
        useWSS: false,
        trpcOptions: { router: router_1.appRouter, createContext: context_1.createContext },
    });
    server.get("/", async () => {
        return { hello: "wait-on 💨" };
    });
    server.get("/hello", async () => {
        return { hello: "GET" };
    });
    server.post("/hello", async ({ body }) => {
        console.log("BODY:", typeof body, body);
        return { hello: "POST", body };
    });
    const stop = () => server.close();
    const start = async () => {
        try {
            await server.listen(PORT);
            console.log("listening on port", PORT);
        }
        catch (err) {
            server.log.error(err);
            process.exit(1);
        }
    };
    return { server, start, stop };
}
exports.createServer = createServer;
