"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewFlowClient = NewFlowClient;
const flow_pb_1 = require("./flow_pb");
const conn_1 = require("../../conn/conn");
function NewFlowClient(opt) {
    const blueapi = new conn_1.BlueAPIService(flow_pb_1.Flow, "flow", opt);
    return blueapi.clientInstance;
}
