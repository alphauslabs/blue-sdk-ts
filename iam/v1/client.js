"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewIamClient = NewIamClient;
const iam_pb_1 = require("./iam_pb");
const conn_1 = require("../../conn/conn");
function NewIamClient(opt) {
    const blueapi = new conn_1.BlueAPIService(iam_pb_1.Iam, "blue", opt);
    return blueapi.clientInstance;
}
