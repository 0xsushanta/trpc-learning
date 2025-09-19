import { publicProcedure, router } from "./trpc.js";
import z from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputtype = z.object({
  title: z.string(),
  descreption: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure
    .input(todoInputtype)
    .mutation(async (opts) => {
      const title = opts.input.title;
      const descreption = opts.input.descreption;
       
        console.log("req hit")
      // db staff
      return {
        id: "2",
      };
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000, () => {
  console.log("tRPC server running on http://localhost:3000");
});