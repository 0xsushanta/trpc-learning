import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index.js";
const trpc= createTRPCProxyClient <AppRouter>({
    links:[
        httpBatchLink({
            url:'http://localhost:3000'
        })
    ]
})
async function main(){
    let response = await trpc.createTodo.mutate({
        title:"hey there",
        descreption: "helo there"
    })
    console.log(response);
}
main()