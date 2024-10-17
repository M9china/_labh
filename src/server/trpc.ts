import { initTRPC } from '@trpc/server';
import EventEmitter from 'events';
import { createTRPCContext } from './routers/context';
import { ZodError } from 'zod';
import superjson from "superjson";
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
/**
 * Initialize the tRPC router
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                error,
                zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        }
    }
})

// event emitter
export const eventEmitter = new EventEmitter()
// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

export const authProcedure = t.procedure.use(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
        throw new Error("UNAUTHORIZED")
    }
    return next({
        ctx: {
            session: { ...ctx.session,  user: ctx.session.user },
            user: ctx.session.user,
            db: ctx.db   
        }
    })
})