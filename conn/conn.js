"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithAccessToken = exports.BlueAPIService = void 0;
const connect_1 = require("@connectrpc/connect");
const connect_web_1 = require("@connectrpc/connect-web");
const connect_devtools_1 = require("connect-devtools");
class BlueAPIService {
    get clientInstance() {
        return this.client;
    }
    constructor(service, serviceName, connectOptions = []) {
        this.serviceName = serviceName;
        this.host = "https://bluerpc.alphaus.cloud:8443";
        if (!connectOptions.length) {
            throw new Error("At least one ConnectOption is required");
        }
        const interceptors = [
            (next) => async (req) => {
                req.header.set("service-name", this.serviceName);
                connectOptions.forEach((option) => option.apply(req.header));
                return await next(req);
            },
        ];
        if ("window" in globalThis &&
            "__CONNECT_WEB_DEVTOOLS__" in globalThis.window) {
            interceptors.push(connect_devtools_1.devtoolsInterceptor);
        }
        const transport = (0, connect_web_1.createGrpcWebTransport)({
            baseUrl: this.host,
            interceptors: interceptors,
        });
        this.client = (0, connect_1.createClient)(service, transport);
    }
}
exports.BlueAPIService = BlueAPIService;
class WithAccessToken {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    apply(req) {
        req.set("Authorization", `Bearer ${this.accessToken}`);
    }
}
exports.WithAccessToken = WithAccessToken;
