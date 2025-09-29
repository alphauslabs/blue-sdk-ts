import { Admin } from "./admin_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewAdminClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Admin, "blue", opts);
  return blueapi.clientInstance;
}