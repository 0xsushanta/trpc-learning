import { publicProcedure, router } from "./trpc.js";
import z, { email } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputtype = z.object({
  title: z.string(),
  descreption: z.string(),
});

const appRouter = router({

    Signup: publicProcedure.input(z.object({
        email: z.string().email(),
        password: z.string()
    })).mutation(async(opts)=>{
        const email=opts.input.email
        const password=opts.input.email
        // validation
        //db staffs

        let token="ajsjkdld"
        return{
            token
        }
    }),
      createTodo: publicProcedure
    .input(todoInputtype)
    .mutation(async (opts) => {
      const title = opts.input.title;
      const descreption = opts.input.descreption;
       console.log(opts.ctx.email);
        console.log("req hit")
      // db staff
      return {
        id: "1",
      };
    }),
});


export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  createContext(opts){
    let authheader=opts.req.headers['authorization']
    console.log(authheader);
    // jwt.verify
    return{
      email:"sus123"
    }
  }
});

server.listen(3000, () => {
  console.log("tRPC server running on http://localhost:3000");
});