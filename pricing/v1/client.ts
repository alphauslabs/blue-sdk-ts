import { Pricing } from "./pricing_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewPricingClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Pricing, "pricing", opt);
  return blueapi.clientInstance;
}