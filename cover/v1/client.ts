import { Cover } from "./cover_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewCoverClient(opt?: ConnectOption, logging = false) {
  const blueapi = new BlueAPIService(Cover, "cover", opt, logging);
  return blueapi.clientInstance;
}
