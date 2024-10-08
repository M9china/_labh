'use server';
import { auth, db } from '@/lib';

export async function addToCart(productId: string, quantity: number) {
  // Authenticate the user
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error('User not authenticated');
  }

  try {
    // Find or create the user's cart
    const cart = await db.cart.upsert({
      where: { userId: session.user.id },
      create: { userId: session.user.id },
      update: {},
    });

    // Add or update the cart item
    const cartItem = await db.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      create: {
        cartId: cart.id,
        productId,
        quantity,
      },
      update: {
        quantity: {
          increment: quantity,
        },
      },
    });

    return cartItem;
  } catch (error) {
    throw new Error('Error adding item to cart');
  }
}
