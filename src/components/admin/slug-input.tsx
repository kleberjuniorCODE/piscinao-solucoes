'use client';

import { useEffect, useState } from 'react';

interface SlugInputProps {
  sourceText: string;
  value: string;
  onChange: (slug: string) => void;
  label?: string;
}

export function SlugInput({ sourceText, value, onChange, label = 'Slug (URL)' }: SlugInputProps) {
  const [isAutoGenerating, setIsAutoGenerating] = useState(!value);

  useEffect(() => {
    if (isAutoGenerating && sourceText) {
      const generated = sourceText
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      onChange(generated);
    }
  }, [sourceText, isAutoGenerating, onChange]);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setIsAutoGenerating(false);
            onChange(e.target.value);
          }}
          className="border border-slate-300 rounded px-3 py-2 flex-1 focus:outline-none focus:border-[#0a8af0] focus:ring-1 focus:ring-[#0a8af0]"
        />
        <button
          type="button"
          onClick={() => setIsAutoGenerating(true)}
          className={`text-xs px-2 py-1 rounded ${isAutoGenerating ? 'bg-blue-100 text-[#0a8af0]' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Auto
        </button>
      </div>
    </div>
  );
}
