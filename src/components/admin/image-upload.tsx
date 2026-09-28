'use client';
import { useState, useRef } from 'react';

interface ImageUploadProps {
  label?: string;
  onChange?: (file: File | null, previewUrl: string | null) => void;
  defaultImage?: string;
}

export function ImageUpload({ label, onChange, defaultImage }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(defaultImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('A imagem excede o tamanho máximo de 5MB.');
        return;
      }
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file, url);
    }
  };

  const removeImage = () => {
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    onChange?.(null, null);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <div 
        className="relative flex flex-col items-center justify-center w-full min-h-[150px] border-2 border-dashed border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer overflow-hidden transition-colors"
        onClick={() => !preview && fileInputRef.current?.click()}
      >
        {preview ? (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-100 p-2">
            <img src={preview} alt="Preview" className="max-h-[200px] object-contain rounded" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              title="Remover imagem"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-slate-500">
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            <span className="text-sm font-medium">Clique ou arraste uma imagem</span>
            <span className="text-xs mt-1">PNG, JPG, WEBP (Máximo 5MB)</span>
          </div>
        )}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/png, image/jpeg, image/webp" 
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
