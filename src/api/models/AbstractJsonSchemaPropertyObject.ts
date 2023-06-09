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
 * @interface AbstractJsonSchemaPropertyObject
 */
export interface AbstractJsonSchemaPropertyObject {
    /**
     * 
     * @type {string}
     * @memberof AbstractJsonSchemaPropertyObject
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractJsonSchemaPropertyObject
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the AbstractJsonSchemaPropertyObject interface.
 */
export function instanceOfAbstractJsonSchemaPropertyObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AbstractJsonSchemaPropertyObjectFromJSON(json: any): AbstractJsonSchemaPropertyObject {
    return AbstractJsonSchemaPropertyObjectFromJSONTyped(json, false);
}

export function AbstractJsonSchemaPropertyObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractJsonSchemaPropertyObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function AbstractJsonSchemaPropertyObjectToJSON(value?: AbstractJsonSchemaPropertyObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'readOnly': value.readOnly,
    };
}

