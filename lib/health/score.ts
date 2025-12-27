export function computeHealthScore(
  collateralRatio: number,
  liquidationRatio: number
): number {
  const buffer = collateralRatio - liquidationRatio;

  if (buffer <= 0) return 0;
  if (buffer >= liquidationRatio) return 100;

  return Math.round((buffer / liquidationRatio) * 100);
}