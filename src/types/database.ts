export type QuoteStatus = 'pending' | 'reviewed' | 'approved' | 'rejected';
export type WaterRequestStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';
export type PartnerStatus = 'pending' | 'approved' | 'rejected';
export type StaffRole = 'admin' | 'editor' | 'viewer';

export interface Profile {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  phone?: string;
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface ProductMedia {
  id: string;
  product_id: string;
  url: string;
  alt_text?: string;
  order: number;
  created_at: string;
}

export interface Cart {
  id: string;
  user_id?: string;
  session_id: string;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  cart_id: string;
  product_variant_id: string;
  quantity: number;
  created_at: string;
}

export interface Quote {
  id: string;
  user_id?: string;
  status: QuoteStatus;
  total_estimated?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface QuoteItem {
  id: string;
  quote_id: string;
  product_variant_id: string;
  quantity: number;
  price_at_request: number;
  created_at: string;
}

export interface WaterRequest {
  id: string;
  user_id?: string;
  volume_liters: number;
  address_id: string;
  status: WaterRequestStatus;
  requested_date: string;
  created_at: string;
}

export interface PartnerApplication {
  id: string;
  user_id?: string;
  company_name: string;
  cnpj: string;
  contact_name: string;
  email: string;
  phone: string;
  status: PartnerStatus;
  created_at: string;
}

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  is_active: boolean;
  created_at: string;
}

export interface PageBlock {
  id: string;
  page_id: string;
  type: string;
  content: Record<string, any>;
  order: number;
  created_at: string;
}

export interface SiteSetting {
  key: string;
  value: any;
  updated_at: string;
}

export interface AuditEvent {
  id: string;
  user_id?: string;
  action: string;
  entity: string;
  entity_id: string;
  details?: Record<string, any>;
  created_at: string;
}

export interface StaffMembership {
  id: string;
  user_id: string;
  role: StaffRole;
  created_at: string;
}
