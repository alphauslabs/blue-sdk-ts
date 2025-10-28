"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueCredentials = exports.WithNewBlueCredentials = exports.WithAccessToken = exports.WithDefaultCredentials = exports.BlueAPIService = void 0;
const connect_1 = require("@connectrpc/connect");
const connect_web_1 = require("@connectrpc/connect-web");
const connect_devtools_1 = require("connect-devtools");
const axios_1 = __importDefault(require("axios"));
const DEFAULT_BLUE_RPC_HOST = "https://bluerpc.alphaus.cloud:8443";
const DEFAULT_AUTH_URL = "https://login.alphaus.cloud/ripple/access_token";
class BlueAPIService {
    get clientInstance() {
        return this.client;
    }
    constructor(service, serviceName, connectOption = new WithDefaultCredentials()) {
        this.serviceName = serviceName;
        const interceptors = [
            (next) => async (req) => {
                req.header.set("service-name", this.serviceName);
                await connectOption.apply(req.header);
                return await next(req);
            },
        ];
        if ("window" in globalThis &&
            "__CONNECT_WEB_DEVTOOLS__" in globalThis.window) {
            interceptors.push(connect_devtools_1.devtoolsInterceptor);
        }
        const transport = (0, connect_web_1.createGrpcWebTransport)({
            baseUrl: connectOption.getHost(),
            interceptors: interceptors,
        });
        this.client = (0, connect_1.createClient)(service, transport);
    }
}
exports.BlueAPIService = BlueAPIService;
class WithDefaultCredentials {
    constructor() {
        this.env = process.env;
        this.clientId =
            this.env.ALPHAUS_CLIENT_ID ||
                this.env.ALPHAUS_RIPPLE_CLIENT_ID ||
                this.env.ALPHAUS_WAVE_CLIENT_ID;
        this.clientSecret =
            this.env.ALPHAUS_CLIENT_SECRET ||
                this.env.ALPHAUS_RIPPLE_CLIENT_SECRET ||
                this.env.ALPHAUS_WAVE_CLIENT_SECRET;
        if (!this.clientId && !this.clientSecret) {
            throw new Error("Missing client ID and client secret");
        }
    }
    getHost() {
        return DEFAULT_BLUE_RPC_HOST;
    }
    async apply(req) {
        // get access token
        const creds = new BlueCredentials({
            clientId: this.clientId,
            clientSecret: this.clientSecret,
            authUrl: this.env.ALPHAUS_AUTH_URL,
            userName: this.env.ALPHAUS_USERNAME,
            password: this.env.ALPHAUS_PASSWORD,
        });
        req.set("Authorization", `Bearer ${await creds.getAccessToken()}`);
    }
}
exports.WithDefaultCredentials = WithDefaultCredentials;
class WithAccessToken {
    constructor(accessToken, host) {
        this.accessToken = accessToken;
        this.host = host;
    }
    getHost() {
        return this.host || DEFAULT_BLUE_RPC_HOST;
    }
    apply(req) {
        req.set("Authorization", `Bearer ${this.accessToken}`);
        return Promise.resolve();
    }
}
exports.WithAccessToken = WithAccessToken;
class WithNewBlueCredentials {
    constructor(creds) {
        this.creds = creds;
    }
    getHost() {
        return this.creds.input.host || DEFAULT_BLUE_RPC_HOST;
    }
    async apply(req) {
        req.set("Authorization", `Bearer ${await this.creds.getAccessToken()}`);
    }
}
exports.WithNewBlueCredentials = WithNewBlueCredentials;
class BlueCredentials {
    constructor(input) {
        this.input = input;
    }
    isUserPassAuth() {
        return !!(this.input.userName && this.input.password);
    }
    async getAccessToken() {
        const gt = this.isUserPassAuth() ? "password" : "client_credentials";
        const url = this.input.authUrl || DEFAULT_AUTH_URL;
        try {
            const formData = new FormData();
            formData.append("client_id", this.input.clientId);
            formData.append("client_secret", this.input.clientSecret);
            formData.append("grant_type", gt);
            formData.append("scope", "openid");
            if (this.isUserPassAuth()) {
                formData.append("username", this.input.userName);
                formData.append("password", this.input.password);
            }
            const response = await axios_1.default.post(url, formData);
            return response.data.access_token;
        }
        catch (error) {
            throw new Error(`Failed to get access token: ${error}`);
        }
    }
}
exports.BlueCredentials = BlueCredentials;
