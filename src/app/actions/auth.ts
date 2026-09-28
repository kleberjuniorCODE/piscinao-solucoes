'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { loginSchema, registerSchema, resetPasswordSchema } from '@/lib/validators/auth'

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  const result = loginSchema.safeParse(data)
  if (!result.success) {
    return { error: 'E-mail e senha são obrigatórios.' }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: result.data.email,
    password: result.data.password,
  })

  if (error) {
    return { error: 'E-mail ou senha inválidos.' }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signUp(formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  if (data.password !== data.confirm_password) {
    return { error: 'As senhas não coincidem.' }
  }

  const result = registerSchema.safeParse(data)
  if (!result.success) {
    return { error: 'Preencha todos os campos corretamente.' }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email: result.data.email,
    password: result.data.password,
    options: {
      data: {
        nome: result.data.nome,
        telefone: result.data.telefone,
      },
    },
  })

  if (error) {
    return { error: error.message }
  }

  redirect('/login?registered=true')
}

export const submitRegistration = signUp

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function resetPassword(formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  const result = resetPasswordSchema.safeParse(data)
  if (!result.success) {
    return { error: 'Informe um e-mail válido.' }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.resetPasswordForEmail(result.data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/minha-conta`,
  })

  if (error) {
    return { error: 'Erro ao enviar e-mail de recuperação.' }
  }

  return { success: true }
}
