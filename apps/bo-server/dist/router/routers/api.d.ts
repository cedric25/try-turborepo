/// <reference types="node" />
export declare const apiRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {}, Record<"version", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {}, undefined, undefined, {
    version: string;
}, unknown, {
    version: string;
}>> & Record<"hello", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {}, {
    username?: string | null | undefined;
} | null | undefined, {
    username?: string | null | undefined;
} | null | undefined, {
    text: string;
}, unknown, {
    text: string;
}>>, Record<"create", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: import("../context").User;
}, {}, {
    name: string;
    color: string;
}, {
    name: string;
    color: string;
}, import("freely-prisma").Fruit, unknown, import("freely-prisma").Fruit>>, {}, import("@trpc/server").DefaultErrorShape>;
//# sourceMappingURL=api.d.ts.map