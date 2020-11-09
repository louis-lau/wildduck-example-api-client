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

export class GetFiltersResult {
    /**
    * Filter ID
    */
    'id': string;
    /**
    * Name for the filter
    */
    'name': string;
    /**
    * Datestring of the time the filter was created
    */
    'created': Date;
    'query': Array<Array<string>>;
    'action': Array<Array<string>>;
    /**
    * If true, then this filter is ignored
    */
    'disabled': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "Array<Array<string>>"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "Array<Array<string>>"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetFiltersResult.attributeTypeMap;
    }
}

