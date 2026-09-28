'use server'

import { createServerClient } from '@/lib/supabase/server';

export async function getPosts(page: string | undefined, search: string | undefined) {
  const supabase = createServerClient();
  let query = supabase.from('posts').select('*').eq('status', 'published').order('published_at', { ascending: false });
  
  if (search) {
    query = query.ilike('title', `%${search}%`);
  }
  
  query = query.range(0, 9);
  
  const { data, error } = await query;
  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}

export async function getPostBySlug(slug: string) {
  const supabase = createServerClient();
  const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).single();
  if (error) return null;
  return data;
}

export async function getLatestPosts(limit: number = 3) {
  const supabase = createServerClient();
  const { data, error } = await supabase.from('posts').select('*').eq('status', 'published').order('published_at', { ascending: false }).limit(limit);
  if (error) {
    console.error(error);
    return [];
  }
  return data || [];
}
