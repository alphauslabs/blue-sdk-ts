import { Cost } from "./cost_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewCostClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Cost, "cost", opts);
  return blueapi.clientInstance;
}
