/// <reference types="node" />
import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
export interface User {
    name: string | string[];
}
export declare function createContext({ req, res }: CreateFastifyContextOptions): {
    req: import("fastify").FastifyRequest<import("fastify/types/route").RouteGenericInterface, import("http").Server, import("http").IncomingMessage, unknown, import("fastify").FastifyLoggerInstance>;
    res: import("fastify").FastifyReply<import("http").Server, import("http").IncomingMessage, import("http").ServerResponse, import("fastify/types/route").RouteGenericInterface, unknown>;
    user: User;
};
export declare type Context = inferAsyncReturnType<typeof createContext>;
//# sourceMappingURL=context.d.ts.map