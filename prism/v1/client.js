"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPrismClient = NewPrismClient;
const prism_pb_1 = require("./prism_pb");
const conn_1 = require("../../conn/conn");
function NewPrismClient(opt) {
    const blueapi = new conn_1.BlueAPIService(prism_pb_1.Prism, "prism", opt);
    return blueapi.clientInstance;
}
