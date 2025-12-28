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
  const [selectedPresetId, setSelectedPresetId] = useState(
    PROTOCOL_PRESETS[0].id
  );

  const selectedPreset = PROTOCOL_PRESETS.find(
    (p) => p.id === selectedPresetId
  )!;

  const [input, setInput] = useState<CDPInput>({
    collateralAmount: 1000,
    collateralPrice: 0.5,
    debtAmount: 300,
    liquidationRatio: selectedPreset.liquidationRatio,
  });

  useEffect(() => {
    setInput((prev) => ({
      ...prev,
      liquidationRatio: selectedPreset.liquidationRatio,
    }));
  }, [selectedPreset]);

  const health = calculateCDPHealth(input);
  const score = computeHealthScore(
    health.collateralRatio,
    input.liquidationRatio
  );

  return (
    <main className="container">
      <h1>DeFi Position Health Calculator</h1>

      <div className="grid">
        {/* LEFT */}
        <div className="left">
          <ProtocolSelector
            presets={PROTOCOL_PRESETS}
            selectedId={selectedPresetId}
            onSelect={(preset) => setSelectedPresetId(preset.id)}
          />

          <InputPanel input={input} onChange={setInput} />
        </div>

        {/* RIGHT */}
        <div className="right">
          <HealthSummary score={score} />
          <RiskMetrics health={health} />
        </div>
      </div>

      <HowItWorks />
    </main>
  );
}