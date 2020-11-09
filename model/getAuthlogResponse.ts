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
import { GetAuthlogResult } from './getAuthlogResult';

export class GetAuthlogResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * How many results were found
    */
    'total': number;
    /**
    * Current page number. Derived from page query argument
    */
    'page': number;
    /**
    * Either a cursor string or false if there are not any previous results
    */
    'previousCursor': string;
    /**
    * Either a cursor string or false if there are not any next results
    */
    'nextCursor': string;
    /**
    * Event listing
    */
    'results': Array<GetAuthlogResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number"
        },
        {
            "name": "previousCursor",
            "baseName": "previousCursor",
            "type": "string"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<GetAuthlogResult>"
        }    ];

    static getAttributeTypeMap() {
        return GetAuthlogResponse.attributeTypeMap;
    }
}

