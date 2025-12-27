"use client";

import { useState, useEffect } from "react";

import ProtocolSelector from "@/components/ProtocolSelector";
import InputPanel from "@/components/InputPanel";
import HealthSummary from "@/components/HealthSummary";
import RiskMetrics from "@/components/RiskMetrics";
import HowItWorks from "@/components/HowItWorks";

import { PROTOCOL_PRESETS } from "@/lib/health/presets";
import { calculateCDPHealth } from "@/lib/health/cdp";
import { computeHealthScore } from "@/lib/health/score";
import { CDPInput } from "@/lib/health/types";

export default function Home() {
  // 1️⃣ Selected protocol preset
  const [selectedPresetId, setSelectedPresetId] = useState(
    PROTOCOL_PRESETS[0].id
  );

  const selectedPreset = PROTOCOL_PRESETS.find(
    (p) => p.id === selectedPresetId
  )!;

  // 2️⃣ Position input state
  const [input, setInput] = useState<CDPInput>({
    collateralAmount: 1000,
    collateralPrice: 0.5,
    debtAmount: 300,
    liquidationRatio: selectedPreset.liquidationRatio,
  });

  // 3️⃣ Sync liquidation ratio when preset changes
  useEffect(() => {
    setInput((prev) => ({
      ...prev,
      liquidationRatio: selectedPreset.liquidationRatio,
    }));
  }, [selectedPreset]);

  // 4️⃣ Core calculations
  const health = calculateCDPHealth(input);

  const score = computeHealthScore(
    health.collateralRatio,
    input.liquidationRatio
  );

  return (
    <main className="container">
      <h1>DeFi Position Health Calculator</h1>

      {/* Protocol preset selector */}
      <ProtocolSelector
        presets={PROTOCOL_PRESETS}
        selectedId={selectedPresetId}
        onSelect={(preset) => setSelectedPresetId(preset.id)}
      />

      {/* User inputs */}
      <InputPanel input={input} onChange={setInput} />

      {/* Health summary */}
      <HealthSummary score={score} />

      {/* Risk metrics */}
      <RiskMetrics health={health} />

      {/* Explanation */}
      <HowItWorks />
    </main>
  );
}