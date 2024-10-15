import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'Hello world!'
    }),
    });

export type AppRouter = typeof appRouter