import { db } from "@/lib";
import { ICartInput, LabhContext } from "@/types";

export class UserCartService {
  static readonly TAX_RATE = 0.18;
  static readonly DELIVERY_FEE = 59.99;
  // Get the total count of items in the user's cart
  static readonly getItemsCount = async (context: LabhContext) => {
    const userId = context.session?.user?.id;
    if (!userId) {
      throw new Error("User not authenticated");
    }

    try {
      // Fetch all distinct product items in the cart for the user
      const cartItems = await db.cartItem.findMany({
        where: {
          cart: {
            userId: userId,
          },
        },
        select: {
          productId: true,
          quantity: true,
          price: true,
          name: true,
          size: true,
          color: true,
        },
        distinct: ["productId", "size", "color"], // Ensure distinct products
      });
      // Count the number of distinct products in the cart
      const itemCount = cartItems.length;

      const totalAmount = cartItems.reduce((acc: any, item: any) => {
        return acc + parseFloat(item.price);
      }, 0);

      const tax = totalAmount * this.TAX_RATE;

      const deliveryFee = this.DELIVERY_FEE;

      const orderTotal = totalAmount + tax + deliveryFee;
      // Return the count of different items
      return {
        count: itemCount,
        bucket: cartItems,
        totalAmount: totalAmount.toFixed(2),
        deliveryFee: deliveryFee.toFixed(2),
        tax: tax.toFixed(2),
        orderTotal: orderTotal.toFixed(2)
      };
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: `Adding comment failed: ${error.message}`,
      };
    }
  };

  // Add a product to the user's cart
  static readonly addToCart = async (input: ICartInput) => {
    const { productId, quantity, context, name, price, color, size } = input;
    const userId = context.session?.user?.id;

    // Ensure the user is authenticated
    if (!userId) {
      throw new Error("User not authenticated");
    }

    try {
      // Find or create the user's cart
      const cart = await db.cart.upsert({
        where: { userId: userId },
        create: { userId: userId },
        update: {},
      });

      const numericPrice = parseFloat(price);

      if (isNaN(numericPrice)) {
        throw new Error("Invalid price format");
      }

      // Calculate the total price for this cart item
      const totalPrice = numericPrice * quantity;

      // Add or update the cart item
      const cartItem = await db.cartItem.upsert({
        where: {
          cartId_productId_size_color: {
            cartId: cart.id,
            productId,
            size,
            color,
          },
        },
        create: {
          cartId: cart.id,
          productId,
          quantity,
          name,
          price: totalPrice.toFixed(2),
          size,
          color,
        },
        update: {
          quantity: {
            increment: quantity,
          },
          price: totalPrice.toFixed(2),
        },
      });

      return cartItem;
    } catch (error) {
      throw new Error("Error adding item to cart");
    }
  };
}
