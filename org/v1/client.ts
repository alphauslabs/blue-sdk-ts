import { Organization } from "./org_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewOrganizationClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Organization, "blue", opt);
  return blueapi.clientInstance;
}
