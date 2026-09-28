'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { X, Trash2, Plus, Minus } from 'lucide-react';

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [items, setItems] = useState([]); // placeholder for actual cart state

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Seu Orçamento</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Seu orçamento está vazio.</p>
              <Button onClick={onClose} className="bg-pool hover:bg-pool/90 text-white">Continuar Comprando</Button>
            </div>
          ) : (
            items.map((item: any) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                  <div className="mt-1 font-semibold text-primary">{formatCurrency(item.price)}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <button className="px-2 py-1"><Minus className="h-3 w-3" /></button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button className="px-2 py-1"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Observações</label>
              <textarea placeholder="Ex: Preciso para o dia X..." rows={2} className="w-full border rounded-md px-3 py-2 text-sm"></textarea>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total Estimado</span>
              <span>{formatCurrency(0)}</span>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
