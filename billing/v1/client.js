"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewBillingClient = NewBillingClient;
const billing_pb_1 = require("./billing_pb");
const conn_1 = require("../../conn/conn");
function NewBillingClient(...opts) {
    const blueapi = new conn_1.BlueAPIService(billing_pb_1.Billing, "billing", opts);
    return blueapi.clientInstance;
}
