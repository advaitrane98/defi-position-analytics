import { CDPInput, CDPHealth } from "./types";

export function calculateCDPHealth(input: CDPInput): CDPHealth {
  const { collateralAmount, collateralPrice, debtAmount, liquidationRatio } = input;

  const collateralValue = collateralAmount * collateralPrice;
  const collateralRatio = (collateralValue / debtAmount) * 100;

  const distanceToLiquidationPct =
    ((collateralRatio - liquidationRatio) / liquidationRatio) * 100;

  const priceDropToLiquidationPct =
    ((collateralRatio - liquidationRatio) / collateralRatio) * 100;

  const minCollateralValue = (debtAmount * liquidationRatio) / 100;
  const maxWithdrawableValue = Math.max(collateralValue - minCollateralValue, 0);
  const maxWithdrawableCollateral = maxWithdrawableValue / collateralPrice;

  return {
    collateralValue,
    collateralRatio,
    distanceToLiquidationPct,
    priceDropToLiquidationPct,
    maxWithdrawableCollateral,
  };
}