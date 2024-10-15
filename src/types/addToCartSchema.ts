import { z } from 'zod';

export interface ICartInput {
  productId: string;
  quantity: number;
  price: string;
  name: string;
  context: any;
}

export const addToCartSchema = z.object({
  productId: z.string().nonempty("Product ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.string().nonempty('Product price is required'),
  name: z.string().nonempty("Product name is required")
  });

export type UserCartCount = z.infer<typeof addToCartSchema>;
