export interface Tick {
  // id: number;
  place: string;
  date: Date;
  reminder ?: boolean;
  reminded ?: string;
  bodyLocation ?: string; // TODO ?
}
