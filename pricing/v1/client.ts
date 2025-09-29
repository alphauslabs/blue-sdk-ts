import { Pricing } from "./pricing_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewPricingClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Pricing, "pricing", opts);
  return blueapi.clientInstance;
}