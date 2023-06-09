/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ExampleModelRequestBody
 */
export interface ExampleModelRequestBody {
    /**
     * 
     * @type {string}
     * @memberof ExampleModelRequestBody
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ExampleModelRequestBody
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ExampleModelRequestBody
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ExampleModelRequestBody
     */
    phone?: string;
}

/**
 * Check if a given object implements the ExampleModelRequestBody interface.
 */
export function instanceOfExampleModelRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExampleModelRequestBodyFromJSON(json: any): ExampleModelRequestBody {
    return ExampleModelRequestBodyFromJSONTyped(json, false);
}

export function ExampleModelRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExampleModelRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
    };
}

export function ExampleModelRequestBodyToJSON(value?: ExampleModelRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email,
        'phone': value.phone,
    };
}

