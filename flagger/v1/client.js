"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewFlaggerClient = NewFlaggerClient;
const flagger_pb_1 = require("./flagger_pb");
const conn_1 = require("../../conn/conn");
function NewFlaggerClient(opt) {
    const blueapi = new conn_1.BlueAPIService(flagger_pb_1.Flagger, "blue", opt);
    return blueapi.clientInstance;
}
