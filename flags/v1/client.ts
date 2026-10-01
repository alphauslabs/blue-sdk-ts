import { Flags } from "./flags_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewFlagsClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Flags, "blue", opt);
  return blueapi.clientInstance;
}
