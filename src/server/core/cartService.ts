import { db } from "@/lib";
import { ICartInput, LabhContext } from "@/types";

export class UserCartService {
    // Get the total count of items in the user's cart
    static readonly getItemsCount = async (context:LabhContext) => {
        const userId = context.session?.user?.id;
        if(!userId) {
            throw new Error('User not authenticated');
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
                price: true
            },
            distinct: ['productId'], // Ensure distinct products
        });
        // Count the number of distinct products in the cart
        const itemCount = cartItems.length;
           // Return the count of different items
           return { count: itemCount, bucket: cartItems };
        } catch (error: any) {
            console.log(error);
            return {
                success: false,
                message: `Adding comment failed: ${error.message}`,
            };
        }
     
    }

    // Add a product to the user's cart
    static readonly addToCart = async (input: ICartInput) => {
        const { productId, quantity,context } = input;
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
            throw new Error("Error adding item to cart");
        }
    }
}
