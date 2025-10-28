import { Cover } from "./cover_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewCoverClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Cover, "cover", opt);
  return blueapi.clientInstance;
}
