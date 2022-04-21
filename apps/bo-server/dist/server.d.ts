/// <reference types="node" />
export declare function createServer(): {
    server: import("fastify").FastifyInstance<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").FastifyLoggerInstance> & PromiseLike<import("fastify").FastifyInstance<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify").FastifyLoggerInstance>>;
    start: () => Promise<void>;
    stop: () => Promise<undefined>;
};
//# sourceMappingURL=server.d.ts.map