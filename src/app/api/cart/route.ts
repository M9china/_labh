import { NextApiRequest, NextApiResponse } from 'next';
import { auth, db } from '@/lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await auth(req, res);

    if (!session || !session.user || !session.user.id) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { productId, quantity } = req.body;

    try {
      // Find or create the user's cart
      const cart = await db.cart.upsert({
        where: { userId: session.user.id },
        create: { userId: session.user.id },
        update: {},
      });

      // Add or update the item in the cart
      const cartItem = await db.cartItem.upsert({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId: productId,
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

      return res.status(200).json(cartItem);
    } catch (error) {
      return res.status(500).json({ error: 'Error adding item to cart' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
