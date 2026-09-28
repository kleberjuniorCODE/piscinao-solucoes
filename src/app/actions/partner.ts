'use server'

import { createClient } from '@/lib/supabase/server';

export async function submitPartnerApplication(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const supabase = await createClient();
  const { error } = await supabase.from('partner_applications').insert(data);
  if (error) return { error: error.message };
  return { success: true };
}
