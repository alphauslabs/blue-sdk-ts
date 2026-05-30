import { Flagger } from "./flagger_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewFlaggerClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Flagger, "blue", opt);
  return blueapi.clientInstance;
}
