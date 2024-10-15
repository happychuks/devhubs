import { publicProcedure, router } from "./trpc";
import { authRouter } from "./auth-router";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        auth: authRouter
    }),
    });

export type AppRouter = typeof appRouter