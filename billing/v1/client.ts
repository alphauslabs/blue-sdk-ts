import { Billing } from "./billing_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewBillingClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Billing, "billing", opt);
  return blueapi.clientInstance;
}
