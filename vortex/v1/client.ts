import { Vortex } from "./vortex_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewVortexClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Vortex, "vortex", opt);
  return blueapi.clientInstance;
}
