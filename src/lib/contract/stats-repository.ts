export type Stats = {
  driverCount: number;
  customerCount: number;
  rideCount: number;
}

export interface StatsRepository {
  get(): Promise<Stats>;
}
