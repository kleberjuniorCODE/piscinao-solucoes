import { z } from 'zod';

export const variantSchema = z.object({
  name: z.string().min(1),
  sku: z.string().min(1),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
});

export const productSchema = z.object({
  categoryId: z.string().uuid(),
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  isActive: z.boolean().default(true),
  variants: z.array(variantSchema).optional(),
});
