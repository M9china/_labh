import { Color, Size } from '@prisma/client';
import { z } from 'zod';

export interface ICartInput {
  productId: string;
  quantity: number;
  price: string;
  name: string;
  color: Color;
  size: Size;
  context: any;
}

export const addToCartSchema = z.object({
  productId: z.string().nonempty("Product ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.string().nonempty('Product price is required'),
  name: z.string().nonempty("Product name is required"),
  size: z.enum(['XS', 'S', 'M', 'L', 'XL'], { errorMap: () => ({ message: 'Invalid size selected' }) }),
  color: z.enum(['BLUE', 'GRAY', 'BLACK', 'WHITE'], { errorMap: () => ({ message: 'Invalid color selected' }) })

  });

export type UserCartCount = z.infer<typeof addToCartSchema>;
