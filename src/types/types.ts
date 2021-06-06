export interface PokeItem {
  id: number;
  cost: number;
  name: string;
  spriteURL: string;
  description: {
    short: string;
    long: string;
  };
}
