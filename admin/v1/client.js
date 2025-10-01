"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewAdminClient = NewAdminClient;
const admin_pb_1 = require("./admin_pb");
const conn_1 = require("../../conn/conn");
function NewAdminClient(...opts) {
    const blueapi = new conn_1.BlueAPIService(admin_pb_1.Admin, "blue", opts);
    return blueapi.clientInstance;
}
