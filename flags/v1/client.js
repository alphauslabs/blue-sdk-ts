"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewFlagsClient = NewFlagsClient;
const flags_pb_1 = require("./flags_pb");
const conn_1 = require("../../conn/conn");
function NewFlagsClient(opt) {
    const blueapi = new conn_1.BlueAPIService(flags_pb_1.Flags, "blue", opt);
    return blueapi.clientInstance;
}
