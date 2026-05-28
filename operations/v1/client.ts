import { Operations } from "./operations_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewOperationsClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Operations, "operations", opt);
  return blueapi.clientInstance;
}
