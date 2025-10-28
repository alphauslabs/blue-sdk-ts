import { Preferences } from "./preferences_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewPreferenceClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Preferences, "blue", opt);
  return blueapi.clientInstance;
}

