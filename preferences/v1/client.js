"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPreferenceClient = NewPreferenceClient;
const preferences_pb_1 = require("./preferences_pb");
const conn_1 = require("../../conn/conn");
function NewPreferenceClient(...opts) {
    const blueapi = new conn_1.BlueAPIService(preferences_pb_1.Preferences, "blue", opts);
    return blueapi.clientInstance;
}
