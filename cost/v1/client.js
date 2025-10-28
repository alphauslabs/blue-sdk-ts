"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCostClient = NewCostClient;
const cost_pb_1 = require("./cost_pb");
const conn_1 = require("../../conn/conn");
function NewCostClient(opt) {
    const blueapi = new conn_1.BlueAPIService(cost_pb_1.Cost, "cost", opt);
    return blueapi.clientInstance;
}
