<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


Brex uses webhooks to send real-time notifications when events happen in the accounts that you manage.
Use webhook subscriptions to subscribe to different webhook events.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexwebhooks.webhookSubscriptions.getDetails`](#brexwebhookswebhooksubscriptionsgetdetails)
  * [`brexwebhooks.webhookSubscriptions.list`](#brexwebhookswebhooksubscriptionslist)
  * [`brexwebhooks.webhookSubscriptions.listSecrets`](#brexwebhookswebhooksubscriptionslistsecrets)
  * [`brexwebhooks.webhookSubscriptions.registerEndpoint`](#brexwebhookswebhooksubscriptionsregisterendpoint)
  * [`brexwebhooks.webhookSubscriptions.unregisterWebhook`](#brexwebhookswebhooksubscriptionsunregisterwebhook)
  * [`brexwebhooks.webhookSubscriptions.updateWebhook`](#brexwebhookswebhooksubscriptionsupdatewebhook)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Webhooks&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexWebhooks } from "brex-webhooks-typescript-sdk";

const brexwebhooks = new BrexWebhooks({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const getDetailsResponse = await brexwebhooks.webhookSubscriptions.getDetails({
  id: "id_example",
});

console.log(getDetailsResponse);
```

## Reference<a id="reference"></a>


### `brexwebhooks.webhookSubscriptions.getDetails`<a id="brexwebhookswebhooksubscriptionsgetdetails"></a>

Get details of a webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await brexwebhooks.webhookSubscriptions.getDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexwebhooks.webhookSubscriptions.list`<a id="brexwebhookswebhooksubscriptionslist"></a>

List the webhooks you have registered

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexwebhooks.webhookSubscriptions.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageWebhookSubscription](./models/page-webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexwebhooks.webhookSubscriptions.listSecrets`<a id="brexwebhookswebhooksubscriptionslistsecrets"></a>


This endpoint returns a set of webhook signing secrets used to validate the webhook.
Usually only one key will be returned in the response. After key rotation, this endpoint will return two keys:
the new key, and the key that will be revoked soon. There will also be two signatures in the 'Webhook-Signature' request header.
Your application should use all keys available to validate the webhook request. If validation passes for any
of the keys returned, the webhook payload is valid.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSecretsResponse =
  await brexwebhooks.webhookSubscriptions.listSecrets();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSecret](./models/webhook-secret.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks/secrets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexwebhooks.webhookSubscriptions.registerEndpoint`<a id="brexwebhookswebhooksubscriptionsregisterendpoint"></a>

Register an endpoint to start receiving selected webhook events

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerEndpointResponse =
  await brexwebhooks.webhookSubscriptions.registerEndpoint({
    IdempotencyKey: "IdempotencyKey_example",
    url: "url_example",
    event_types: ["REFERRAL_CREATED"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### event_types: [`WebhookEventType`](./models/webhook-event-type.ts)[]<a id="event_types-webhookeventtypemodelswebhook-event-typets"></a>

The Brex API sends webhooks for the events listed below. For more details, see the [webhook guide](https://developer.brex.com/openapi/webhooks_api/) and [webhook events API reference](https://developer.brex.com/openapi/webhooks_api/).

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexwebhooks.webhookSubscriptions.unregisterWebhook`<a id="brexwebhookswebhooksubscriptionsunregisterwebhook"></a>

Unregister a webhook if you want to stop receiving webhook events

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unregisterWebhookResponse =
  await brexwebhooks.webhookSubscriptions.unregisterWebhook({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexwebhooks.webhookSubscriptions.updateWebhook`<a id="brexwebhookswebhooksubscriptionsupdatewebhook"></a>

Update a webhook.
You can update the endpoint url, event types that the endpoint receives, or temporarily deactivate the webhook.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookResponse =
  await brexwebhooks.webhookSubscriptions.updateWebhook({
    id: "id_example",
    url: "url_example",
    event_types: ["REFERRAL_CREATED"],
    status: "ACTIVE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### event_types: [`WebhookEventType`](./models/webhook-event-type.ts)[]<a id="event_types-webhookeventtypemodelswebhook-event-typets"></a>

##### status: [`UpdateWebhookSubscriptionStatus`](./models/update-webhook-subscription-status.ts)<a id="status-updatewebhooksubscriptionstatusmodelsupdate-webhook-subscription-statusts"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookSubscription](./models/webhook-subscription.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhooks/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
