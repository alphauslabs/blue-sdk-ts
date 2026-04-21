"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewVortexClient = NewVortexClient;
const vortex_pb_1 = require("./vortex_pb");
const conn_1 = require("../../conn/conn");
function NewVortexClient(opt) {
    const blueapi = new conn_1.BlueAPIService(vortex_pb_1.Vortex, "vortex", opt);
    return blueapi.clientInstance;
}
