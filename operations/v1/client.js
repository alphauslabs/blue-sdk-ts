"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewOperationsClient = NewOperationsClient;
const operations_pb_1 = require("./operations_pb");
const conn_1 = require("../../conn/conn");
function NewOperationsClient(opt) {
    const blueapi = new conn_1.BlueAPIService(operations_pb_1.Operations, "operations", opt);
    return blueapi.clientInstance;
}
