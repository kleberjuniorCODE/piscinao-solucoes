'use server'

import { createServerClient } from '@/lib/supabase/server';

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const supabase = createServerClient();
  const { error } = await supabase.from('contact_requests').insert(data);
  if (error) return { error: error.message };
  return { success: true };
}
