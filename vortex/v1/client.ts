import { Vortex } from "./vortex_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewAdminClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Vortex, "vortex", opts);
  return blueapi.clientInstance;
}