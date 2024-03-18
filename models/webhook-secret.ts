/*
Webhooks API


Brex uses webhooks to send real-time notifications when events happen in the accounts that you manage.
Use webhook subscriptions to subscribe to different webhook events.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookSecretStatus } from './webhook-secret-status';

/**
 * 
 * @export
 * @interface WebhookSecret
 */
export interface WebhookSecret {
    /**
     * 
     * @type {string}
     * @memberof WebhookSecret
     */
    'secret': string;
    /**
     * 
     * @type {WebhookSecretStatus}
     * @memberof WebhookSecret
     */
    'status': WebhookSecretStatus;
}
