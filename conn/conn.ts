import { createClient, type Client } from '@connectrpc/connect'
import { createGrpcWebTransport } from '@connectrpc/connect-web'
import type { DescService } from '@bufbuild/protobuf'

export class BlueAPIService<Service extends DescService> {
  private client: Client<Service>
  private host: string = 'https://bluerpc.alphaus.cloud:8443'

  get clientInstance(): Client<Service> {
    return this.client
  }

  constructor(service: Service, 
    private serviceName: string, 
    connectOptions: ConnectOption[] = []) {
    if (!connectOptions.length) {
        throw new Error("At least one ConnectOption is required")
    }

    const transport = createGrpcWebTransport({
      baseUrl: this.host,
      interceptors: [
        (next) => async (req) => {
          req.header.set('service-name', this.serviceName)
          connectOptions.forEach(option => option.apply(req.header))
          return await next(req)
        }
      ]
    })

    this.client = createClient(service, transport)
  }
}


export interface ConnectOption {
    apply(req: Headers): void;
}

export class WithAccessToken implements ConnectOption {
    constructor(private accessToken: string) {}

    apply(req: Headers): void {
        req.set("Authorization", `Bearer ${this.accessToken}`);
    }
}
