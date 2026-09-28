'use server'

import { createClient } from '@/lib/supabase/server';

export async function submitWaterRequest(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const supabase = await createClient();
  const { error } = await supabase.from('water_requests').insert(data);
  if (error) return { error: error.message };
  return { success: true };
}
