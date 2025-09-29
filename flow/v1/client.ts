import { Flow } from "./flow_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewFlowClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Flow, "flow", opts);
  return blueapi.clientInstance;
}
