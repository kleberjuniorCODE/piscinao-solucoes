import { z } from 'zod';

export const waterRequestSchema = z.object({
  volumeLiters: z.number().int().positive('O volume deve ser positivo'),
  addressId: z.string().uuid('Endereço inválido'),
  requestedDate: z.string().datetime(),
});
