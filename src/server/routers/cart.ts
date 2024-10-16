import { addToCartSchema } from '@/types';
import { authProcedure, router } from '../trpc';
import { UserCartService } from '@/server/core/cartService';

export const cartRouter = router({
  // Add to cart mutation using the UserCartService
  addToCart: authProcedure
    .input(addToCartSchema)
    .mutation(async ({ input, ctx }) => {
      // Call the addToCart method from UserCartService
      return UserCartService.addToCart({
        context: ctx, 
        productId: input.productId, 
        quantity: input.quantity,
        name: input.name,
        price: input.price,
        color: input.color,
        size: input.size
      });
    }),

  // Get cart query to fetch the total count of different items
  getCart: authProcedure.query(async ({ ctx }) => {
    // Call the getItemsCount method from UserCartService
    return UserCartService.getItemsCount(ctx);
  }),
});
