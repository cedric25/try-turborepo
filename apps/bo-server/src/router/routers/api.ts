import { z } from "zod";
import { createRouter } from "../createRouter";
import { goCreateFruitInDb } from "../../goCreateFruitInDb";

export const apiRouter = createRouter()
  .query("version", {
    resolve() {
      return { version: "0.42.0" };
    },
  })
  .query("hello", {
    input: z
      .object({
        username: z.string().nullish(),
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
    input: z.object({
      name: z.string(),
      color: z.string(),
    }),
    resolve({ input, ctx }) {
      console.log("input", input);
      return goCreateFruitInDb(input);
    },
  });
