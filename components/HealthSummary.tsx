export default function HealthSummary({ score }: { score: number }) {
  const status = score > 70 ? "Safe" : score > 40 ? "Caution" : "Danger";

  return (
    <div className="card">
      <h2>Health Score</h2>
      <div className="score">{score}/100</div>
      <p>Status: <strong>{status}</strong></p>
    </div>
  );
}