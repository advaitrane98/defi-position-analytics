export interface CDPInput {
  collateralAmount: number;
  collateralPrice: number;
  debtAmount: number;
  liquidationRatio: number; // %
}

export interface CDPHealth {
  collateralValue: number;
  collateralRatio: number;
  distanceToLiquidationPct: number;
  priceDropToLiquidationPct: number;
  maxWithdrawableCollateral: number;
}