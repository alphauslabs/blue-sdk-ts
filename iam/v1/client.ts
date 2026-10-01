import { Iam } from "./iam_pb";
import { BlueAPIService, type ConnectOption } from "../../conn/conn";

export function NewIamClient(opt?: ConnectOption) {
  const blueapi = new BlueAPIService(Iam, "blue", opt);
  return blueapi.clientInstance;
}

