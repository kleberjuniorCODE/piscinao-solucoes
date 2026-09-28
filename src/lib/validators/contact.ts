import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});
