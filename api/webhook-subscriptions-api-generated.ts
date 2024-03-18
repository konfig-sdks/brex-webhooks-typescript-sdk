/* tslint:disable */
/* eslint-disable */
/*
Webhooks API


Brex uses webhooks to send real-time notifications when events happen in the accounts that you manage.
Use webhook subscriptions to subscribe to different webhook events.


The version of the OpenAPI document: 0.1
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateWebhookSubscriptionRequest } from '../models';
// @ts-ignore
import { PageWebhookSubscription } from '../models';
// @ts-ignore
import { UpdateWebhookSubscriptionRequest } from '../models';
// @ts-ignore
import { UpdateWebhookSubscriptionStatus } from '../models';
// @ts-ignore
import { WebhookEventType } from '../models';
// @ts-ignore
import { WebhookSecret } from '../models';
// @ts-ignore
import { WebhookSubscription } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WebhookSubscriptionsApi - axios parameter creator
 * @export
 */
export const WebhookSubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get details of a webhook
         * @summary Get Webhook
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDetails', 'id', id)
            const localVarPath = `/v1/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the webhooks you have registered
         * @summary List Webhooks
         * @param {string} [cursor] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *  This endpoint returns a set of webhook signing secrets used to validate the webhook. Usually only one key will be returned in the response. After key rotation, this endpoint will return two keys: the new key, and the key that will be revoked soon. There will also be two signatures in the \'Webhook-Signature\' request header. Your application should use all keys available to validate the webhook request. If validation passes for any of the keys returned, the webhook payload is valid. 
         * @summary List Webhook Secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSecrets: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/webhooks/secrets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks/secrets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register an endpoint to start receiving selected webhook events
         * @summary Register Webhook
         * @param {string} idempotencyKey 
         * @param {CreateWebhookSubscriptionRequest} createWebhookSubscriptionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEndpoint: async (idempotencyKey: string, createWebhookSubscriptionRequest: CreateWebhookSubscriptionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idempotencyKey' is not null or undefined
            assertParamExists('registerEndpoint', 'idempotencyKey', idempotencyKey)
            // verify required parameter 'createWebhookSubscriptionRequest' is not null or undefined
            assertParamExists('registerEndpoint', 'createWebhookSubscriptionRequest', createWebhookSubscriptionRequest)
            const localVarPath = `/v1/webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createWebhookSubscriptionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhookSubscriptionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unregister a webhook if you want to stop receiving webhook events
         * @summary Unregister Webhook
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unregisterWebhook: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('unregisterWebhook', 'id', id)
            const localVarPath = `/v1/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a webhook. You can update the endpoint url, event types that the endpoint receives, or temporarily deactivate the webhook. 
         * @summary Update Webhook
         * @param {string} id 
         * @param {UpdateWebhookSubscriptionRequest} updateWebhookSubscriptionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook: async (id: string, updateWebhookSubscriptionRequest: UpdateWebhookSubscriptionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateWebhook', 'id', id)
            // verify required parameter 'updateWebhookSubscriptionRequest' is not null or undefined
            assertParamExists('updateWebhook', 'updateWebhookSubscriptionRequest', updateWebhookSubscriptionRequest)
            const localVarPath = `/v1/webhooks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateWebhookSubscriptionRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/webhooks/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateWebhookSubscriptionRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookSubscriptionsApi - functional programming interface
 * @export
 */
export const WebhookSubscriptionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookSubscriptionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get details of a webhook
         * @summary Get Webhook
         * @param {WebhookSubscriptionsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: WebhookSubscriptionsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookSubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the webhooks you have registered
         * @summary List Webhooks
         * @param {WebhookSubscriptionsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: WebhookSubscriptionsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageWebhookSubscription>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.cursor, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *  This endpoint returns a set of webhook signing secrets used to validate the webhook. Usually only one key will be returned in the response. After key rotation, this endpoint will return two keys: the new key, and the key that will be revoked soon. There will also be two signatures in the \'Webhook-Signature\' request header. Your application should use all keys available to validate the webhook request. If validation passes for any of the keys returned, the webhook payload is valid. 
         * @summary List Webhook Secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSecrets(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WebhookSecret>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSecrets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Register an endpoint to start receiving selected webhook events
         * @summary Register Webhook
         * @param {WebhookSubscriptionsApiRegisterEndpointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerEndpoint(requestParameters: WebhookSubscriptionsApiRegisterEndpointRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookSubscription>> {
            const createWebhookSubscriptionRequest: CreateWebhookSubscriptionRequest = {
                url: requestParameters.url,
                event_types: requestParameters.event_types
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerEndpoint(requestParameters.idempotencyKey, createWebhookSubscriptionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unregister a webhook if you want to stop receiving webhook events
         * @summary Unregister Webhook
         * @param {WebhookSubscriptionsApiUnregisterWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unregisterWebhook(requestParameters: WebhookSubscriptionsApiUnregisterWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unregisterWebhook(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a webhook. You can update the endpoint url, event types that the endpoint receives, or temporarily deactivate the webhook. 
         * @summary Update Webhook
         * @param {WebhookSubscriptionsApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhook(requestParameters: WebhookSubscriptionsApiUpdateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookSubscription>> {
            const updateWebhookSubscriptionRequest: UpdateWebhookSubscriptionRequest = {
                url: requestParameters.url,
                event_types: requestParameters.event_types,
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(requestParameters.id, updateWebhookSubscriptionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhookSubscriptionsApi - factory interface
 * @export
 */
export const WebhookSubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookSubscriptionsApiFp(configuration)
    return {
        /**
         * Get details of a webhook
         * @summary Get Webhook
         * @param {WebhookSubscriptionsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: WebhookSubscriptionsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<WebhookSubscription> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List the webhooks you have registered
         * @summary List Webhooks
         * @param {WebhookSubscriptionsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: WebhookSubscriptionsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PageWebhookSubscription> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         *  This endpoint returns a set of webhook signing secrets used to validate the webhook. Usually only one key will be returned in the response. After key rotation, this endpoint will return two keys: the new key, and the key that will be revoked soon. There will also be two signatures in the \'Webhook-Signature\' request header. Your application should use all keys available to validate the webhook request. If validation passes for any of the keys returned, the webhook payload is valid. 
         * @summary List Webhook Secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSecrets(options?: AxiosRequestConfig): AxiosPromise<Array<WebhookSecret>> {
            return localVarFp.listSecrets(options).then((request) => request(axios, basePath));
        },
        /**
         * Register an endpoint to start receiving selected webhook events
         * @summary Register Webhook
         * @param {WebhookSubscriptionsApiRegisterEndpointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerEndpoint(requestParameters: WebhookSubscriptionsApiRegisterEndpointRequest, options?: AxiosRequestConfig): AxiosPromise<WebhookSubscription> {
            return localVarFp.registerEndpoint(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unregister a webhook if you want to stop receiving webhook events
         * @summary Unregister Webhook
         * @param {WebhookSubscriptionsApiUnregisterWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unregisterWebhook(requestParameters: WebhookSubscriptionsApiUnregisterWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unregisterWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook. You can update the endpoint url, event types that the endpoint receives, or temporarily deactivate the webhook. 
         * @summary Update Webhook
         * @param {WebhookSubscriptionsApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook(requestParameters: WebhookSubscriptionsApiUpdateWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<WebhookSubscription> {
            return localVarFp.updateWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDetails operation in WebhookSubscriptionsApi.
 * @export
 * @interface WebhookSubscriptionsApiGetDetailsRequest
 */
export type WebhookSubscriptionsApiGetDetailsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WebhookSubscriptionsApiGetDetails
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in WebhookSubscriptionsApi.
 * @export
 * @interface WebhookSubscriptionsApiListRequest
 */
export type WebhookSubscriptionsApiListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WebhookSubscriptionsApiList
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {number}
    * @memberof WebhookSubscriptionsApiList
    */
    readonly limit?: number
    
}

/**
 * Request parameters for registerEndpoint operation in WebhookSubscriptionsApi.
 * @export
 * @interface WebhookSubscriptionsApiRegisterEndpointRequest
 */
export type WebhookSubscriptionsApiRegisterEndpointRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WebhookSubscriptionsApiRegisterEndpoint
    */
    readonly idempotencyKey: string
    
} & CreateWebhookSubscriptionRequest

/**
 * Request parameters for unregisterWebhook operation in WebhookSubscriptionsApi.
 * @export
 * @interface WebhookSubscriptionsApiUnregisterWebhookRequest
 */
export type WebhookSubscriptionsApiUnregisterWebhookRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WebhookSubscriptionsApiUnregisterWebhook
    */
    readonly id: string
    
}

/**
 * Request parameters for updateWebhook operation in WebhookSubscriptionsApi.
 * @export
 * @interface WebhookSubscriptionsApiUpdateWebhookRequest
 */
export type WebhookSubscriptionsApiUpdateWebhookRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WebhookSubscriptionsApiUpdateWebhook
    */
    readonly id: string
    
} & UpdateWebhookSubscriptionRequest

/**
 * WebhookSubscriptionsApiGenerated - object-oriented interface
 * @export
 * @class WebhookSubscriptionsApiGenerated
 * @extends {BaseAPI}
 */
export class WebhookSubscriptionsApiGenerated extends BaseAPI {
    /**
     * Get details of a webhook
     * @summary Get Webhook
     * @param {WebhookSubscriptionsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public getDetails(requestParameters: WebhookSubscriptionsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the webhooks you have registered
     * @summary List Webhooks
     * @param {WebhookSubscriptionsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public list(requestParameters: WebhookSubscriptionsApiListRequest = {}, options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  This endpoint returns a set of webhook signing secrets used to validate the webhook. Usually only one key will be returned in the response. After key rotation, this endpoint will return two keys: the new key, and the key that will be revoked soon. There will also be two signatures in the \'Webhook-Signature\' request header. Your application should use all keys available to validate the webhook request. If validation passes for any of the keys returned, the webhook payload is valid. 
     * @summary List Webhook Secrets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public listSecrets(options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).listSecrets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register an endpoint to start receiving selected webhook events
     * @summary Register Webhook
     * @param {WebhookSubscriptionsApiRegisterEndpointRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public registerEndpoint(requestParameters: WebhookSubscriptionsApiRegisterEndpointRequest, options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).registerEndpoint(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unregister a webhook if you want to stop receiving webhook events
     * @summary Unregister Webhook
     * @param {WebhookSubscriptionsApiUnregisterWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public unregisterWebhook(requestParameters: WebhookSubscriptionsApiUnregisterWebhookRequest, options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).unregisterWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a webhook. You can update the endpoint url, event types that the endpoint receives, or temporarily deactivate the webhook. 
     * @summary Update Webhook
     * @param {WebhookSubscriptionsApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookSubscriptionsApiGenerated
     */
    public updateWebhook(requestParameters: WebhookSubscriptionsApiUpdateWebhookRequest, options?: AxiosRequestConfig) {
        return WebhookSubscriptionsApiFp(this.configuration).updateWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}