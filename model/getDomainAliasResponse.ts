/**
 * WildDuck API
 * WildDuck API docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class GetDomainAliasResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * ID of the Alias
    */
    'id': string;
    /**
    * Alias domain
    */
    'alias': string;
    /**
    * Alias target
    */
    'domain': string;
    /**
    * Datestring of the time the alias was created
    */
    'created': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return GetDomainAliasResponse.attributeTypeMap;
    }
}

