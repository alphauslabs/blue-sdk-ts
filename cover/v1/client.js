"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCoverClient = NewCoverClient;
const cover_pb_1 = require("./cover_pb");
const conn_1 = require("../../conn/conn");
function NewCoverClient(opt, logging = false) {
    const blueapi = new conn_1.BlueAPIService(cover_pb_1.Cover, "cover", opt, logging);
    return blueapi.clientInstance;
}
