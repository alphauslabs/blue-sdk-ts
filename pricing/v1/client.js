"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPricingClient = NewPricingClient;
const pricing_pb_1 = require("./pricing_pb");
const conn_1 = require("../../conn/conn");
function NewPricingClient(...opts) {
    const blueapi = new conn_1.BlueAPIService(pricing_pb_1.Pricing, "pricing", opts);
    return blueapi.clientInstance;
}
