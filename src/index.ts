import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { appRouter } from "./trpc/routers/_app";
import { createTRPCContext } from "./trpc/init";

const app = new Hono().basePath("/api");
app.get("/", (c) => {
  return c.json({
    message: "Congrats! You've deployed Hono to Vercel! FROM SRC",
  });
});
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: createTRPCContext,
  })
);
export { app };
const server = {
  port: +(process.env.PORT ?? 3000),
  fetch: app.fetch,
};
export default server;
// const handler = handle(app);
// export const GET = handler;
// export const POST = handler;
// export const PATCH = handler;
// export const PUT = handler;
// export const OPTIONS = handler;
