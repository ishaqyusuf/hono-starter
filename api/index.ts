import { Hono } from "hono";
import { handle } from "hono/vercel";
const app = new Hono().basePath("/api");
import { testResp } from "./fn";
// app.get('/', (c) => {
//   return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
// })
// app.use(
//   "/trpc/*",
//   trpcServer({
//     router: appRouter,
//     createContext: createTRPCContext,
//   })
// );
app.get("/", (c) => {
  return c.json({
    message: "Congrats! You've deployed Hono to Vercel! API",
    ...testResp(),
  });
});
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
