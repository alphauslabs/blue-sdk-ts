import { Iam } from "./iam_pb";
import { BlueAPIService, ConnectOption } from "../../conn/conn";

export function NewIamClient(...opts: ConnectOption[]) {
  const blueapi = new BlueAPIService(Iam, "blue", opts);
  return blueapi.clientInstance;
}

