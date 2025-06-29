import { Hono } from "hono";
import { handle } from "hono/vercel";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "../src/trpc/routers/_app";
import { createTRPCContext } from "../src/trpc/init";
const app = new Hono().basePath("/api");

// app.get('/', (c) => {
//   return c.json({ message: "Congrats! You've deployed Hono to Vercel" })
// })
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: createTRPCContext,
  })
);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
