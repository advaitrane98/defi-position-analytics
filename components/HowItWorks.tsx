export default function HowItWorks() {
  return (
    <details className="card">
      <summary><strong>How It Works</strong></summary>

      <p>
        This tool evaluates the health of a collateralized debt position (CDP)
        using protocol-agnostic DeFi risk mathematics.
      </p>

      <h3>Collateral Ratio</h3>
      <p>
        CR = (Collateral Value ÷ Debt) × 100
      </p>

      <h3>Liquidation Risk</h3>
      <p>
        If CR falls below the protocol liquidation ratio, the position becomes liquidatable.
      </p>

      <h3>Price Sensitivity</h3>
      <p>
        Estimates how much collateral price can drop before liquidation.
      </p>

      <h3>Health Score</h3>
      <ul>
        <li>70–100: Safe</li>
        <li>40–70: Caution</li>
        <li>0–40: High Risk</li>
      </ul>
    </details>
  );
}