'use server'

import { createClient } from '@/lib/supabase/server';

export async function getProducts(filters?: any) {
  const supabase = await createClient();
  let query = supabase.from('products').select('*').eq('status', 'published');
  
  const { data, error } = await query;
  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}

export async function getCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('categories').select('*').eq('is_active', true);
  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}
