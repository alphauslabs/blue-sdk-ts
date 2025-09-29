import { Prism } from "./prism_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewAdminClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Prism, "prism", opts);
  return blueapi.clientInstance;
}
