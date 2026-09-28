import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export const registerSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().optional(),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: 'As senhas não coincidem',
  path: ['confirm_password'],
})

export const resetPasswordSchema = z.object({
  email: z.string().email('E-mail inválido'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
