'use server'

import { createServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function getOrCreateCart() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  let { data: cart } = await supabase
    .from('carts')
    .select('*')
    .eq('user_id', user.id)
    .eq('status', 'active')
    .single();

  if (!cart) {
    const { data: newCart, error } = await supabase
      .from('carts')
      .insert({ user_id: user.id, status: 'active' })
      .select()
      .single();
    if (error) throw error;
    cart = newCart;
  }
  
  return cart;
}

export async function addToCart(variantId: string, quantity: number) {
  const cart = await getOrCreateCart();
  if (!cart) return { error: 'User not authenticated' };
  
  const supabase = createServerClient();
  
  // check if item exists
  const { data: existingItem } = await supabase
    .from('cart_items')
    .select('*')
    .eq('cart_id', cart.id)
    .eq('variant_id', variantId)
    .single();
    
  if (existingItem) {
    await supabase
      .from('cart_items')
      .update({ quantity: existingItem.quantity + quantity })
      .eq('id', existingItem.id);
  } else {
    await supabase
      .from('cart_items')
      .insert({ cart_id: cart.id, variant_id: variantId, quantity });
  }
  
  revalidatePath('/', 'layout');
  return { success: true };
}

export async function removeCartItem(itemId: string) {
  const supabase = createServerClient();
  await supabase.from('cart_items').delete().eq('id', itemId);
  revalidatePath('/', 'layout');
  return { success: true };
}
