-- ENUMS
CREATE TYPE staff_role AS ENUM ('admin', 'editor', 'catalog_manager', 'support');
CREATE TYPE product_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE quote_status AS ENUM ('received', 'under_review', 'proposal_sent', 'accepted', 'closed', 'cancelled');
CREATE TYPE water_request_status AS ENUM ('received', 'waiting_sample', 'analyzing', 'completed', 'cancelled');
CREATE TYPE partner_status AS ENUM ('pending', 'approved', 'rejected', 'info_requested');
CREATE TYPE block_type AS ENUM ('hero_banner', 'category_grid', 'product_carousel', 'text_block', 'image_block', 'cta_block', 'testimonials', 'newsletter');

-- UPDATED AT FUNCTION
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- PROTOCOL GENERATORS
CREATE OR REPLACE FUNCTION generate_protocol_number()
RETURNS TRIGGER AS $$
DECLARE
  prefix text;
  year text := to_char(now(), 'YYYY');
  seq_val integer;
  formatted_seq text;
BEGIN
  IF TG_TABLE_NAME = 'quotes' THEN
    prefix := 'ORC';
  ELSIF TG_TABLE_NAME = 'water_requests' THEN
    prefix := 'AGU';
  ELSIF TG_TABLE_NAME = 'contact_requests' THEN
    prefix := 'CTT';
  ELSE
    prefix := 'REQ';
  END IF;
  
  -- Create sequence if not exists (using dynamic SQL for table-specific sequences)
  EXECUTE format('CREATE SEQUENCE IF NOT EXISTS seq_%s_%s', TG_TABLE_NAME, year);
  EXECUTE format('SELECT nextval(''seq_%s_%s'')', TG_TABLE_NAME, year) INTO seq_val;
  
  formatted_seq := lpad(seq_val::text, 5, '0');
  NEW.protocol := prefix || '-' || year || '-' || formatted_seq;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- TABLES

-- 1. profiles
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome text NOT NULL,
  telefone text,
  avatar_url text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. staff_memberships
CREATE TABLE staff_memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  role staff_role NOT NULL,
  is_active boolean DEFAULT true,
  granted_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now()
);

-- 3. addresses
CREATE TABLE addresses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  label text,
  cep text NOT NULL,
  logradouro text NOT NULL,
  numero text NOT NULL,
  complemento text,
  bairro text NOT NULL,
  cidade text NOT NULL,
  uf char(2) NOT NULL,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4. categories
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 5. products
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text,
  description text,
  brand text,
  status product_status DEFAULT 'draft',
  is_featured boolean DEFAULT false,
  allow_quote_only boolean DEFAULT false,
  seo_title text,
  seo_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 6. product_variants
CREATE TABLE product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  sku text UNIQUE NOT NULL,
  variant_name text,
  attributes jsonb DEFAULT '{}',
  price_in_cents integer NOT NULL CHECK (price_in_cents > 0),
  compare_at_price_in_cents integer,
  stock_quantity integer DEFAULT 0,
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 7. product_media
CREATE TABLE product_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  file_path text NOT NULL,
  alt_text text DEFAULT '',
  media_type text DEFAULT 'image',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 8. favorites
CREATE TABLE favorites (
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, product_id)
);

-- 9. carts
CREATE TABLE carts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 10. cart_items
CREATE TABLE cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id uuid REFERENCES carts(id) ON DELETE CASCADE,
  variant_id uuid REFERENCES product_variants(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (cart_id, variant_id)
);

-- 11. quotes
CREATE TABLE quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol text UNIQUE, -- Handled by trigger
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  status quote_status DEFAULT 'received',
  snapshot_data jsonb NOT NULL,
  total_in_cents integer,
  notes text,
  internal_notes text,
  responded_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 12. quote_items
CREATE TABLE quote_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote_id uuid REFERENCES quotes(id) ON DELETE CASCADE,
  variant_id uuid REFERENCES product_variants(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  variant_name text,
  sku text,
  quantity integer NOT NULL,
  unit_price_in_cents integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 13. water_requests
CREATE TABLE water_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol text UNIQUE, -- Handled by trigger
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  store_unit text NOT NULL,
  pool_type text,
  pool_volume_liters integer,
  pool_cover text,
  current_treatment text,
  pool_details jsonb DEFAULT '{}',
  status water_request_status DEFAULT 'received',
  result_file_path text,
  client_notes text,
  internal_notes text,
  analyzed_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 14. partner_applications
CREATE TABLE partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  business_name text NOT NULL,
  cnpj text,
  activity_type text NOT NULL,
  city text NOT NULL,
  uf char(2) NOT NULL,
  phone text,
  website text,
  description text,
  status partner_status DEFAULT 'pending',
  reviewed_by uuid REFERENCES profiles(id),
  review_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 15. pages
CREATE TABLE pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  is_published boolean DEFAULT false,
  version integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 16. page_blocks
CREATE TABLE page_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  block_type block_type NOT NULL,
  content_json jsonb NOT NULL DEFAULT '{}',
  sort_order integer DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 17. posts
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text,
  content_html text NOT NULL,
  cover_url text,
  author_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  status text DEFAULT 'draft',
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 18. site_settings
CREATE TABLE site_settings (
  key text PRIMARY KEY,
  value_json jsonb NOT NULL,
  description text,
  is_public boolean DEFAULT true,
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES profiles(id) ON DELETE SET NULL
);

-- 19. contact_requests
CREATE TABLE contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol text UNIQUE, -- Handled by trigger
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  channel text DEFAULT 'website',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- 20. audit_events
CREATE TABLE audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  action text NOT NULL,
  entity_name text NOT NULL,
  entity_id uuid,
  diff_json jsonb,
  ip_address text,
  created_at timestamptz DEFAULT now()
);

-- 21. marketing_preferences
CREATE TABLE marketing_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  email_promotions boolean DEFAULT false,
  whatsapp_promotions boolean DEFAULT false,
  updated_at timestamptz DEFAULT now()
);

-- 22. legal_acceptances
CREATE TABLE legal_acceptances (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  document_type text NOT NULL,
  document_version text NOT NULL,
  accepted_at timestamptz NOT NULL DEFAULT now(),
  ip_address text
);

-- TRIGGERS SETUP
-- auth.users insert trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, nome)
  VALUES (new.id, COALESCE(new.raw_user_meta_data->>'full_name', 'Usuário'));
  RETURN new;
END;
$$ LANGUAGE plpgsql security definer;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- updated_at triggers
CREATE TRIGGER handle_updated_at_profiles BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_addresses BEFORE UPDATE ON addresses FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_categories BEFORE UPDATE ON categories FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_products BEFORE UPDATE ON products FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_product_variants BEFORE UPDATE ON product_variants FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_carts BEFORE UPDATE ON carts FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_cart_items BEFORE UPDATE ON cart_items FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_quotes BEFORE UPDATE ON quotes FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_water_requests BEFORE UPDATE ON water_requests FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_partner_applications BEFORE UPDATE ON partner_applications FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_pages BEFORE UPDATE ON pages FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_page_blocks BEFORE UPDATE ON page_blocks FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_posts BEFORE UPDATE ON posts FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_site_settings BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();
CREATE TRIGGER handle_updated_at_marketing_preferences BEFORE UPDATE ON marketing_preferences FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

-- protocol generators triggers
CREATE TRIGGER set_quote_protocol BEFORE INSERT ON quotes FOR EACH ROW EXECUTE PROCEDURE generate_protocol_number();
CREATE TRIGGER set_water_request_protocol BEFORE INSERT ON water_requests FOR EACH ROW EXECUTE PROCEDURE generate_protocol_number();
CREATE TRIGGER set_contact_request_protocol BEFORE INSERT ON contact_requests FOR EACH ROW EXECUTE PROCEDURE generate_protocol_number();

-- RLS AND POLICIES
-- Default Deny All
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE water_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE legal_acceptances ENABLE ROW LEVEL SECURITY;

-- Helper to check admin/staff (Used in policies)
CREATE OR REPLACE FUNCTION is_staff() RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1 FROM staff_memberships WHERE user_id = auth.uid() AND is_active = true
  );
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION is_admin() RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1 FROM staff_memberships WHERE user_id = auth.uid() AND role = 'admin' AND is_active = true
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- Profiles: Users can read/update their own. Staff can read all.
CREATE POLICY "Users can read own profile" ON profiles FOR SELECT USING (auth.uid() = id OR is_staff());
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Staff memberships: Only admins can manage. Staff can read own.
CREATE POLICY "Admins can manage staff" ON staff_memberships FOR ALL USING (is_admin());
CREATE POLICY "Staff can read own membership" ON staff_memberships FOR SELECT USING (auth.uid() = user_id);

-- Addresses: Users CRUD their own only.
CREATE POLICY "Users manage own addresses" ON addresses FOR ALL USING (auth.uid() = user_id);

-- Categories: Public read if is_active. Staff manage.
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (is_active = true OR is_staff());
CREATE POLICY "Staff manage categories" ON categories FOR ALL USING (is_staff());

-- Products: Public read if published. Staff manage all.
CREATE POLICY "Public read products" ON products FOR SELECT USING (status = 'published' OR is_staff());
CREATE POLICY "Staff manage products" ON products FOR ALL USING (is_staff());

-- Product Variants: Public read if active and parent published. Staff manage.
CREATE POLICY "Public read variants" ON product_variants FOR SELECT USING (
  (is_active = true AND EXISTS (SELECT 1 FROM products WHERE id = product_id AND status = 'published')) 
  OR is_staff()
);
CREATE POLICY "Staff manage variants" ON product_variants FOR ALL USING (is_staff());

-- Product Media: Same as products
CREATE POLICY "Public read product media" ON product_media FOR SELECT USING (
  EXISTS (SELECT 1 FROM products WHERE id = product_id AND status = 'published')
  OR is_staff()
);
CREATE POLICY "Staff manage product media" ON product_media FOR ALL USING (is_staff());

-- Favorites: Users manage their own.
CREATE POLICY "Users manage own favorites" ON favorites FOR ALL USING (auth.uid() = user_id);

-- Carts/Cart Items: Users manage their own active cart.
CREATE POLICY "Users manage own carts" ON carts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own cart items" ON cart_items FOR ALL USING (
  EXISTS (SELECT 1 FROM carts WHERE id = cart_id AND user_id = auth.uid())
);

-- Quotes/Quote Items: Users read their own. Staff manage all.
CREATE POLICY "Users read own quotes" ON quotes FOR SELECT USING (auth.uid() = user_id OR is_staff());
CREATE POLICY "Staff manage quotes" ON quotes FOR ALL USING (is_staff());
CREATE POLICY "Users read own quote items" ON quote_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM quotes WHERE id = quote_id AND (user_id = auth.uid() OR is_staff()))
);
CREATE POLICY "Staff manage quote items" ON quote_items FOR ALL USING (is_staff());

-- Water Requests: Users read their own. Staff manage all.
CREATE POLICY "Users read own water requests" ON water_requests FOR SELECT USING (auth.uid() = user_id OR is_staff());
CREATE POLICY "Users insert water requests" ON water_requests FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Staff manage water requests" ON water_requests FOR ALL USING (is_staff());

-- Partner Applications: Users read their own. Staff manage all.
CREATE POLICY "Users read own partner applications" ON partner_applications FOR SELECT USING (auth.uid() = user_id OR is_staff());
CREATE POLICY "Users insert partner applications" ON partner_applications FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Staff manage partner applications" ON partner_applications FOR ALL USING (is_staff());

-- Contact Requests: Staff read all. Users read their own.
CREATE POLICY "Users read own contact requests" ON contact_requests FOR SELECT USING (auth.uid() = user_id OR is_staff());
CREATE POLICY "Anyone insert contact requests" ON contact_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Staff manage contact requests" ON contact_requests FOR ALL USING (is_staff());

-- Pages/Page Blocks: Public read if published. Staff manage.
CREATE POLICY "Public read pages" ON pages FOR SELECT USING (is_published = true OR is_staff());
CREATE POLICY "Staff manage pages" ON pages FOR ALL USING (is_staff());
CREATE POLICY "Public read page blocks" ON page_blocks FOR SELECT USING (
  is_visible = true AND EXISTS (SELECT 1 FROM pages WHERE id = page_id AND is_published = true) OR is_staff()
);
CREATE POLICY "Staff manage page blocks" ON page_blocks FOR ALL USING (is_staff());

-- Posts: Public read if published. Staff manage.
CREATE POLICY "Public read posts" ON posts FOR SELECT USING (status = 'published' OR is_staff());
CREATE POLICY "Staff manage posts" ON posts FOR ALL USING (is_staff());

-- Site Settings: Public read if is_public. Admins manage.
CREATE POLICY "Public read site settings" ON site_settings FOR SELECT USING (is_public = true OR is_admin());
CREATE POLICY "Admins manage site settings" ON site_settings FOR ALL USING (is_admin());

-- Audit Events: Admins read only.
CREATE POLICY "Admins read audit events" ON audit_events FOR SELECT USING (is_admin());
CREATE POLICY "System insert audit events" ON audit_events FOR INSERT WITH CHECK (true); -- Usually inserted via internal functions

-- Marketing Preferences: Users manage their own.
CREATE POLICY "Users manage own marketing preferences" ON marketing_preferences FOR ALL USING (auth.uid() = user_id);

-- Legal Acceptances: Users insert their own. Admins read all.
CREATE POLICY "Users insert own legal acceptances" ON legal_acceptances FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins read legal acceptances" ON legal_acceptances FOR SELECT USING (is_admin());

-- INDEXES
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_product_variants_product_id ON product_variants(product_id);
CREATE INDEX idx_quotes_user_id ON quotes(user_id);
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_quotes_protocol ON quotes(protocol);
CREATE INDEX idx_water_requests_user_id ON water_requests(user_id);
CREATE INDEX idx_water_requests_status ON water_requests(status);
CREATE INDEX idx_carts_user_id_status ON carts(user_id, status);
CREATE INDEX idx_audit_events_entity ON audit_events(entity_name, entity_id);
CREATE INDEX idx_audit_events_actor_id ON audit_events(actor_id);
CREATE INDEX idx_posts_status_published_at ON posts(status, published_at);
