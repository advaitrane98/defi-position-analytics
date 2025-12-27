import { CDPHealth } from "@/lib/health/types";

export default function RiskMetrics({ health }: { health: CDPHealth }) {
  return (
    <div className="card">
      <h2>Risk Metrics</h2>
      <p>Collateral Ratio: {health.collateralRatio.toFixed(2)}%</p>
      <p>Distance to Liquidation: {health.distanceToLiquidationPct.toFixed(2)}%</p>
      <p>Price Drop to Liquidation: {health.priceDropToLiquidationPct.toFixed(2)}%</p>
      <p>Max Withdrawable Collateral: {health.maxWithdrawableCollateral.toFixed(4)}</p>
    </div>
  );
}