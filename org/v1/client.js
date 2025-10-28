"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewOrganizationClient = NewOrganizationClient;
const org_pb_1 = require("./org_pb");
const conn_1 = require("../../conn/conn");
function NewOrganizationClient(opt) {
    const blueapi = new conn_1.BlueAPIService(org_pb_1.Organization, "blue", opt);
    return blueapi.clientInstance;
}
