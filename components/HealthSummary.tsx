export default function HealthSummary({ score }: { score: number }) {
  const status =
    score > 70 ? "Safe" : score > 40 ? "Caution" : "Danger";

  const color =
    score > 70 ? "#22c55e" : score > 40 ? "#facc15" : "#ef4444";

  return (
    <div className="card">
      <h2>Position Health</h2>

      <div className="health-score" style={{ color }}>
        {score}/100
      </div>

      <p className="health-status" style={{ color }}>
        {status}
      </p>
    </div>
  );
}