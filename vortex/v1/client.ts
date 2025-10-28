import { Vortex } from "./vortex_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewAdminClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Vortex, "vortex", opt);
  return blueapi.clientInstance;
}
