'use client';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
}

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const presetColors = ['#0a8af0', '#f05a28', '#f0c808', '#4caf50', '#9c27b0', '#00bcd4', '#607d8b', '#795548', '#333333'];

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <div className="flex items-center gap-3">
        <input 
          type="color" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded cursor-pointer border border-slate-300 p-1 bg-white"
        />
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border border-slate-300 rounded px-3 py-2 w-28 text-sm focus:outline-none focus:border-[#0a8af0]"
        />
      </div>
      <div className="flex gap-2 mt-2">
        {presetColors.map(color => (
          <button
            key={color}
            type="button"
            className={`w-6 h-6 rounded-full border border-slate-200 ${value === color ? 'ring-2 ring-offset-1 ring-[#0a8af0]' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}
