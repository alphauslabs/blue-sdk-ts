import { Organization } from "./org_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewOrganizationClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Organization, "blue", opts);
  return blueapi.clientInstance;
}
