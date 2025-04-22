"use server";

import { statsRepository } from "@/lib/container";
import { Stats } from "../contract/stats-repository";

const repository = statsRepository();

export async function getStats(): Promise<Stats> {
  return await repository.get();
}
