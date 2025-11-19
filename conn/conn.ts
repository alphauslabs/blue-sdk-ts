import { createClient, Interceptor, type Client } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import type { DescService } from "@bufbuild/protobuf";
import { devtoolsInterceptor } from "connect-devtools";
import axios from "axios";

const DEFAULT_BLUE_RPC_HOST = "https://bluerpc.alphaus.cloud:8443";
const DEFAULT_AUTH_URL = "https://login.alphaus.cloud/ripple/access_token";
export class BlueAPIService<Service extends DescService> {
  private client: Client<Service>;

  get clientInstance(): Client<Service> {
    return this.client;
  }

  constructor(
    service: Service,
    private serviceName: string,
    connectOption: ConnectOption = new WithDefaultCredentials()
  ) {
    const interceptors: Interceptor[] = [
      (next) => async (req) => {
        req.header.set("service-name", this.serviceName);
        await connectOption.apply(req.header);
        return await next(req);
      },
    ];

    if (
      "window" in globalThis &&
      "__CONNECT_WEB_DEVTOOLS__" in globalThis.window
    ) {
      interceptors.push(devtoolsInterceptor);
    }

    const transport = createGrpcWebTransport({
      baseUrl: connectOption.getHost(),
      interceptors: interceptors,
    });

    this.client = createClient(service, transport);
  }
}
export interface ConnectOption {
  apply(req: Headers): Promise<void>;
  getHost(): string;
}

export class WithDefaultCredentials implements ConnectOption {
  private readonly clientId?: string;
  private readonly clientSecret?: string;
  private readonly env = process.env;

  constructor() {
    this.clientId =
      this.env["ALPHAUS_CLIENT_ID"] ||
      this.env["ALPHAUS_RIPPLE_CLIENT_ID"] ||
      this.env["ALPHAUS_WAVE_CLIENT_ID"];
    this.clientSecret =
      this.env["ALPHAUS_CLIENT_SECRET"] ||
      this.env["ALPHAUS_RIPPLE_CLIENT_SECRET"] ||
      this.env["ALPHAUS_WAVE_CLIENT_SECRET"];

    if (!this.clientId && !this.clientSecret) {
      throw new Error("Missing client ID and client secret");
    }
  }

  getHost(): string {
    return DEFAULT_BLUE_RPC_HOST;
  }

  async apply(req: Headers): Promise<void> {
    // get access token
    const creds = new BlueCredentials({
      clientId: this.clientId!,
      clientSecret: this.clientSecret!,
      authUrl: this.env["ALPHAUS_AUTH_URL"],
      userName: this.env["ALPHAUS_USERNAME"],
      password: this.env["ALPHAUS_PASSWORD"],
    });
    req.set("Authorization", `Bearer ${await creds.getAccessToken()}`);
  }
}
export class WithAccessToken implements ConnectOption {
  constructor(
    private readonly accessToken: string,
    private readonly host?: string
  ) {}

  getHost(): string {
    return this.host || DEFAULT_BLUE_RPC_HOST;
  }

  apply(req: Headers): Promise<void> {
    req.set("Authorization", `Bearer ${this.accessToken}`);
    return Promise.resolve();
  }
}

export class WithNewBlueCredentials implements ConnectOption {
  constructor(private creds: BlueCredentials) {}

  getHost(): string {
    return this.creds.input.host || DEFAULT_BLUE_RPC_HOST;
  }

  async apply(req: Headers): Promise<void> {
    req.set("Authorization", `Bearer ${await this.creds.getAccessToken()}`);
  }
}

export class BlueCredentials {
  constructor(public readonly input: BlueCredentials.Input) {}

  private isUserPassAuth(): boolean {
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
        formData.append("username", this.input.userName!);
        formData.append("password", this.input.password!);
      }
      const response = await axios.post(url, formData);
      return response.data.access_token;
    } catch (error) {
      throw new Error(`Failed to get access token: ${error}`);
    }
  }
}

namespace BlueCredentials {
  export type Input = {
    clientId: string;
    clientSecret: string;
    authUrl?: string;
    userName?: string;
    password?: string;
    host?: string;
  };
}
