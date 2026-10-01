import { Admin } from "./admin_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewAdminClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Admin, "blue", opt);
  return blueapi.clientInstance;
}