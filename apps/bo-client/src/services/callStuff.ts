import { createTRPCClient } from "@trpc/client";
import type { AppRouter } from "../../../bo-server/src/router/index";

export async function callStuff() {
  const client = createTRPCClient<AppRouter>({
    url: "http://localhost:3011/trpc",
  });

  const helloResponse = await client.query("hello", {
    username: "Plof",
  });

  console.log("helloResponse", helloResponse);
}
