"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewAdminClient = NewAdminClient;
const vortex_pb_1 = require("./vortex_pb");
const conn_1 = require("../../conn/conn");
function NewAdminClient(opt) {
    const blueapi = new conn_1.BlueAPIService(vortex_pb_1.Vortex, "vortex", opt);
    return blueapi.clientInstance;
}
