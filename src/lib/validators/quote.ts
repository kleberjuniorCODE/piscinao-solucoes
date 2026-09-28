import { z } from 'zod';

export const addToCartSchema = z.object({
  productVariantId: z.string().uuid(),
  quantity: z.number().int().positive(),
});

export const submitQuoteSchema = z.object({
  notes: z.string().optional(),
});
