import { router } from '../trpc';
import { cartRouter } from './cart';
export const appRouter = router({
  cart: cartRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
