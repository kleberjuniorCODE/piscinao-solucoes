'use client';

import ProductEditorPage from '../[id]/page';

export default function NovoProdutoPage() {
  return <ProductEditorPage params={Promise.resolve({ id: undefined })} />;
}
