import { z } from 'zod';

export interface ICartInput {
  productId: string;
  quantity: number;
  context: any;
}

export const addToCartSchema = z.object({
  productId: z.string().nonempty("Product ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  });

export type UserCartCount = z.infer<typeof addToCartSchema>;
