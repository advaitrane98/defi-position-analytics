export interface ProtocolPreset {
  id: string;
  name: string;
  liquidationRatio: number;
  description: string;
}

export const PROTOCOL_PRESETS: ProtocolPreset[] = [
  {
    id: "indigo_iusd",
    name: "Indigo · iUSD",
    liquidationRatio: 120,
    description: "Indigo CDP for iUSD (120% liquidation ratio)",
  },
  {
    id: "maker_eth_a",
    name: "MakerDAO · ETH-A",
    liquidationRatio: 145,
    description: "MakerDAO ETH-A vault (145% liquidation ratio)",
  },
  {
    id: "generic",
    name: "Generic CDP",
    liquidationRatio: 150,
    description: "Generic overcollateralized debt position",
  },
];