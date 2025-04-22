import {
  collection,
  getDocs,
} from "firebase/firestore";
import { StatsRepository, Stats } from "@/lib/contract/stats-repository";
import { firestore } from "@/lib/firebase";

export class FirebaseStatsRepository implements StatsRepository {
  get(): Promise<Stats> {
    return new Promise(async (resolve, reject) => {
      try {
        const driverCount = await this.getDriverCount();
        const customerCount = await this.getCustomerCount();
        const rideCount = await this.getRideCount();

        resolve({
          driverCount,
          customerCount,
          rideCount,
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  private async getDriverCount(): Promise<number> {
    const driversCollection = collection(firestore, "drivers_data");
    const querySnapshot = await getDocs(driversCollection);
    return querySnapshot.size;
  }

  private async getCustomerCount(): Promise<number> {
    const customersCollection = collection(firestore, "customers_data");
    const querySnapshot = await getDocs(customersCollection);
    return querySnapshot.size;
  }

  private async getRideCount(): Promise<number> {
    const ridesCollection = collection(firestore, "rides_bookings");
    const querySnapshot = await getDocs(ridesCollection);
    return querySnapshot.size;
  }
}
