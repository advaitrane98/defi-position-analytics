import { CDPInput } from "./types";

export function validateCDPInput(input: CDPInput): string[] {
  const errors: string[] = [];

  if (input.collateralAmount <= 0)
    errors.push("Collateral amount must be greater than 0");

  if (input.collateralPrice <= 0)
    errors.push("Collateral price must be greater than 0");

  if (input.debtAmount <= 0)
    errors.push("Debt amount must be greater than 0");

  if (input.liquidationRatio <= 100)
    errors.push("Liquidation ratio must be greater than 100%");

  return errors;
}