import { Billing } from "./billing_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewBillingClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Billing, "billing", opts);
  return blueapi.clientInstance;
}
