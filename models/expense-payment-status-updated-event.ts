/*
Webhooks API


Brex uses webhooks to send real-time notifications when events happen in the accounts that you manage.
Use webhook subscriptions to subscribe to different webhook events.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExpensePaymentStatus } from './expense-payment-status';
import { ExpensePaymentStatusUpdatedEventAmount } from './expense-payment-status-updated-event-amount';
import { ExpensePaymentType } from './expense-payment-type';
import { WebhookEventType } from './webhook-event-type';

/**
 * The webhook will be sent when an expense payment changes status. Account must be on Brex Empower to receive these events. Subscription must be registered with a user with the CARD_ADMIN role.
 * @export
 * @interface ExpensePaymentStatusUpdatedEvent
 */
export interface ExpensePaymentStatusUpdatedEvent {
    /**
     * 
     * @type {WebhookEventType}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'event_type': WebhookEventType;
    /**
     * 
     * @type {string}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'expense_id': string;
    /**
     * `PENDING`:The transaction is yet to be captured. It may be approved, yet to be approved, or yet to be declined.  `DECLINED`: The transaction was declined. 
     * @type {ExpensePaymentStatus}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'payment_status': ExpensePaymentStatus;
    /**
     * `PURCHASE`: A pending transaction for making a purchase.  `REFUND`: A pending transaction for a refund.  `WITHDRAWAL`: A pending transaction for a withdrawal.  `DECLINED`: A pending transaction that was declined and will not be completed. 
     * @type {ExpensePaymentType}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'payment_type': ExpensePaymentType;
    /**
     *  This is the `id` returned in the [Get Company](https://developer.brex.com/openapi/webhooks_api/) endpoint. You can use the `company_id` to determine which access token to use when you get the details from our API endpoints. 
     * @type {string}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'company_id'?: string;
    /**
     * 
     * @type {ExpensePaymentStatusUpdatedEventAmount}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'amount'?: ExpensePaymentStatusUpdatedEventAmount;
    /**
     * The name of the card acceptor.
     * @type {string}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'payment_description'?: string;
    /**
     * The ID of the card that is associated with the expense.
     * @type {string}
     * @memberof ExpensePaymentStatusUpdatedEvent
     */
    'card_id'?: string;
}

