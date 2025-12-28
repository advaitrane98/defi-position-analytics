"use client";

import { ProtocolPreset } from "@/lib/health/presets";

interface Props {
  presets: ProtocolPreset[];
  selectedId: string;
  onSelect: (preset: ProtocolPreset) => void;
}

export default function ProtocolSelector({
  presets,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="card">
      <h2>Protocol Preset</h2>

      <select
        value={selectedId}
        onChange={(e) => {
          const preset = presets.find(p => p.id === e.target.value);
          if (preset) onSelect(preset);
        }}
      >
        {presets.map((preset) => (
          <option key={preset.id} value={preset.id}>
            {preset.name}
          </option>
        ))}
      </select>

      <p className="hint">
        Applies protocol risk parameters only.
      </p>
    </div>
  );
}