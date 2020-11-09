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
import { Action } from './action';
import { Query } from './query';

export class UpdateFilterRequest {
    /**
    * Name of the Filter
    */
    'name'?: string;
    'query'?: Query;
    'action'?: Action;
    /**
    * If true then this filter is ignored
    */
    'disabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "Query"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "Action"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UpdateFilterRequest.attributeTypeMap;
    }
}

