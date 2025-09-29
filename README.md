# Blue Typescript SDK
This repository contains the Blue TypeScript SDK, which allows clients to interact with the Blue API from TypeScript applications.

## Note
* Currently, authentication is supported only via access tokens. Make sure you have a valid access token before using the SDK.

## Installation
You can install the SDK using npm:
```
npm install @alphauslabs/blue-sdk-ts@latest
```

## Usage
You must pass an access token to create a client instance.
Use the `WithAccessToken` option when instantiating a client.

### Example in cover service
```ts
import { NewCoverClient } from '@alphauslabs/blue-sdk-ts/cover/v1/client'
import { WithAccessToken } from '@alphauslabs/blue-sdk-ts/conn/conn'

const coverClient = NewCoverClient(new WithAccessToken('your-access-token'))

async function test() {
    try {
        const user = await coverClient.getUserDetails({}) // Get User Details
        console.log(user)
    } catch (e) {
        console.error('Failed to fetch user details:', error);
    }
}
```