import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { appRouter } from "./trpc/routers/_app";
import { createTRPCContext } from "./trpc/init";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");
app.get("/", (c) => {
  return c.json({
    message: "Congrats! You've deployed Hono to Vercel! FROM SRC",
  });
});
app.use(
  "/trpc/*",
  cors({
    origin: process.env.ALLOWED_API_ORIGINS?.split(",") ?? [],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowHeaders: [
      "Authorization",
      "Content-Type",
      "accept-language",
      "x-trpc-source",
      "x-user-locale",
      "x-user-timezone",
      "x-user-country",
    ],
    exposeHeaders: ["Content-Length"],
    maxAge: 86400,
  })
);
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: createTRPCContext,
    endpoint: "/api/trpc",
  })
);
export { app };
const server = {
  port: process.env.PORT ? Number.parseInt(process.env.PORT) : 3000,
  fetch: app.fetch,
};
export default server;
// const handler = handle(app);
// export const GET = handler;
// export const POST = handler;
// export const PATCH = handler;
// export const PUT = handler;
// export const OPTIONS = handler;
