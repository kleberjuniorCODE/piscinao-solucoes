'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';
import { registerSchema } from '@/lib/validators/auth';

export async function submitRegistration(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  if (data.password !== data.confirm_password) {
    return { error: 'As senhas não coincidem' };
  }

  const result = registerSchema.safeParse(data);
  if (!result.success) {
    return { error: 'Dados inválidos' };
  }

  const supabase = createServerClient();
  const { error } = await supabase.auth.signUp({
    email: result.data.email,
    password: result.data.password,
    options: {
      data: {
        nome: result.data.nome,
        telefone: result.data.telefone,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/login?registered=true');
}
