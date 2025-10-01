"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewAdminClient = NewAdminClient;
const prism_pb_1 = require("./prism_pb");
const conn_1 = require("../../conn/conn");
function NewAdminClient(...opts) {
    const blueapi = new conn_1.BlueAPIService(prism_pb_1.Prism, "prism", opts);
    return blueapi.clientInstance;
}
