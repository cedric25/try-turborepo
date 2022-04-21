/// <reference types="node" />
export declare function createRouter(): import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("./context").User;
}, {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("./context").User;
}, {}, {}, {}, {}, import("@trpc/server").DefaultErrorShape>;
//# sourceMappingURL=createRouter.d.ts.map