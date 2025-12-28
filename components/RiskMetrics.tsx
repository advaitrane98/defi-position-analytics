import { CDPHealth } from "@/lib/health/types";

export default function RiskMetrics({ health }: { health: CDPHealth }) {
  return (
    <div className="card">
      <h2>Risk Metrics</h2>

      <div className="metric">
        <span>Collateral Ratio</span>
        <strong>{health.collateralRatio.toFixed(2)}%</strong>
      </div>

      <div className="metric">
        <span>Distance to Liquidation</span>
        <strong>{health.distanceToLiquidationPct.toFixed(2)}%</strong>
      </div>

      <div className="metric">
        <span>Price Drop to Liquidation</span>
        <strong>{health.priceDropToLiquidationPct.toFixed(2)}%</strong>
      </div>

      <div className="metric">
        <span>Max Withdrawable Collateral</span>
        <strong>{health.maxWithdrawableCollateral.toFixed(4)}</strong>
      </div>
    </div>
  );
}