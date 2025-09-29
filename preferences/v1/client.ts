import { Preferences } from "./preferences_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewPreferenceClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Preferences, "blue", opts);
  return blueapi.clientInstance;
}

