import { Cost } from "./cost_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewCostClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Cost, "cost", opt);
  return blueapi.clientInstance;
}
