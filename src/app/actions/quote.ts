'use server'

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitQuote(formData: FormData) {
  const notes = formData.get('notes') as string;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return { error: 'Not authenticated' };

  // Fetch active cart
  const { data: cart } = await supabase.from('carts').select('id').eq('user_id', user.id).eq('status', 'active').single();
  if (!cart) return { error: 'Cart not found' };

  // Generate protocol
  const protocol = `ORC-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

  // Update cart to converted status
  const { error } = await supabase.from('quotes').insert({
    cart_id: cart.id,
    user_id: user.id,
    protocol,
    notes,
    status: 'pending'
  });

  if (error) return { error: error.message };

  await supabase.from('carts').update({ status: 'converted' }).eq('id', cart.id);

  revalidatePath('/minha-conta/orcamentos');
  return { success: true, protocol };
}
