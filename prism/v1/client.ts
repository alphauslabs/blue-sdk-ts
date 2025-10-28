import { Prism } from "./prism_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewAdminClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Prism, "prism", opt);
  return blueapi.clientInstance;
}
