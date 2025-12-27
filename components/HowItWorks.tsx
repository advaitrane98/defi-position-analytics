export default function HowItWorks() {
  return (
    <div className="card">
      <h2>How It Works</h2>

      <p>
        This tool evaluates the health of a collateralized debt position (CDP)
        using protocol-agnostic DeFi risk mathematics.
      </p>

      <h3>1. Collateral Ratio</h3>
      <p>
        Collateral Ratio (CR) = (Collateral Value ÷ Debt) × 100
      </p>
      <p>
        If your CR falls below the protocol’s liquidation ratio, your position
        becomes liquidatable.
      </p>

      <h3>2. Liquidation Buffer</h3>
      <p>
        Distance to liquidation shows how much safety margin you have before
        liquidation occurs.
      </p>

      <h3>3. Price Sensitivity</h3>
      <p>
        The calculator estimates how much the collateral price can fall before
        your position is liquidated.
      </p>

      <h3>4. Safe Actions</h3>
      <p>
        It computes the maximum collateral you can withdraw while remaining
        above the liquidation threshold.
      </p>

      <h3>5. Health Score</h3>
      <p>
        A normalized 0–100 score summarizing overall risk:
      </p>
      <ul className="list-disc ml-5">
        <li><strong>70–100:</strong> Safe</li>
        <li><strong>40–70:</strong> Caution</li>
        <li><strong>0–40:</strong> High Risk</li>
      </ul>

      <p className="mt-4 text-sm opacity-80">
        This is a risk estimation tool, not financial advice.
      </p>
    </div>
  );
}