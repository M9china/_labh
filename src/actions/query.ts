'use server';
import { auth, db } from '@/lib';

export async function getCart() {
  // Authenticate the user
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error('User not authenticated');
  }

  try {
    // Fetch the user's cart and include the cart items
    const cart = await db.cart.findUnique({
      where: {
        userId: session.user.id,
      },
      include: {
        items: true, // Include all the items in the cart
      },
    });

    if (!cart) {
      throw new Error('Cart not found');
    }

    return cart;
  } catch (error) {
    console.error('Error fetching cart:', error); 
    throw new Error(`Error fetching cart: ${error}`);
  }
}
