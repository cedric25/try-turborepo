import fastify from "fastify";
import cors from "fastify-cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./router";
import { createContext } from "./router/context";

const PORT = 3011;

export function createServer() {
  const server = fastify();

  server.register(cors);

  server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    useWSS: false,
    trpcOptions: { router: appRouter, createContext },
  });

  server.get("/", async () => {
    return { hello: "wait-on 💨" };
  });

  server.get("/hello", async () => {
    return { hello: "GET" };
  });

  server.post<{ Body: { text: string; life: number } }>(
    "/hello",
    async ({ body }) => {
      console.log("BODY:", typeof body, body);
      return { hello: "POST", body };
    }
  );

  const stop = () => server.close();
  const start = async () => {
    try {
      await server.listen(PORT);
      console.log("listening on port", PORT);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  return { server, start, stop };
}
