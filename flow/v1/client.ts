import { Flow } from "./flow_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewFlowClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Flow, "flow", opt);
  return blueapi.clientInstance;
}
