"use client";

import { CDPInput } from "@/lib/health/types";

interface Props {
  input: CDPInput;
  onChange: (input: CDPInput) => void;
}

export default function InputPanel({ input, onChange }: Props) {
  const update = (key: keyof CDPInput, value: number) => {
    onChange({ ...input, [key]: value });
  };

  return (
    <div className="card">
      <h2>Position Inputs</h2>

      <label>
        Collateral Amount
        <input
          type="number"
          value={input.collateralAmount}
          onChange={(e) => update("collateralAmount", +e.target.value)}
        />
      </label>

      <label>
        Collateral Price
        <input
          type="number"
          value={input.collateralPrice}
          onChange={(e) => update("collateralPrice", +e.target.value)}
        />
      </label>

      <label>
        Debt Amount
        <input
          type="number"
          value={input.debtAmount}
          onChange={(e) => update("debtAmount", +e.target.value)}
        />
      </label>

      <label>
        Liquidation Ratio (%)
        <input
          type="number"
          value={input.liquidationRatio}
          onChange={(e) => update("liquidationRatio", +e.target.value)}
        />
      </label>
    </div>
  );
}