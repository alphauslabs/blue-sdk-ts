# Blue Typescript SDK

This repository contains the Blue TypeScript SDK, which allows clients to interact with the Blue API from TypeScript applications.

## Installation

You can install the SDK using npm:

```
npm install @alphauspkgs/blue-sdk-ts@latest
```

## Usage

### Authentication

The SDK supports three authentication methods.

#### WithDefaultCredentials()

Uses credentials from environment variables automatically.
See the [documentation](https://labs.alphaus.cloud/docs/blueapi/authentication/#using-environment-variables) for the list of supported keys.

```ts
import { NewCoverClient } from "@alphauspkgs/blue-sdk-ts/cover/v1/client"
const client = NewCoverClient();
```

💡 No need to specify the opt parameter — this is the default value.

#### WithAccessToken()

Authenticate using an access token.
```ts
import { NewCoverClient } from "@alphauspkgs/blue-sdk-ts/cover/v1/client"
import { WithAccessToken } from "@alphauspkgs/blue-sdk-ts/conn/conn";

const client = New CoverClient(new WithAccessToken('your-access-token'))
```

#### WithNewCredentials()

Manually create credentials supported by the Blue API.
```ts
import { BlueCredentials, WithNewBlueCredentials } from "@alphauspkgs/blue-sdk-ts/conn/conn"
import { NewCoverClient } from "@alphauspkgs/blue-sdk-ts/cover/v1/client"
const creds = new BlueCredentials({
    clientId: 'your client id',
    clientSecret: 'your client secret',
    userName: 'your username' // optional
    password: 'your password' // optional
})
const client = NewCoverClient(new WithNewBlueCredentials(creds))
```

See the [authentication guide](https://labs.alphaus.cloud/docs/blueapi/authentication/) for more details.

### Example using the cover service

```ts
import { NewCoverClient } from "@alphauspkgs/blue-sdk-ts/cover/v1/client";
import { WithAccessToken } from "@alphauspkgs/blue-sdk-ts/conn/conn";

const coverClient = NewCoverClient(new WithAccessToken("your-access-token"));

async function test() {
  try {
    const user = await coverClient.getUserDetails({}); // Get User Details
    console.log(user);
  } catch (e) {
    console.error("Failed to fetch user details:", error);
  }
}
```
