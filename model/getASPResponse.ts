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
import { LastUse } from './lastUse';

export class GetASPResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * ID of the Application Password
    */
    'id': string;
    /**
    * Description
    */
    'description': string;
    /**
    * Allowed scopes for the Application Password
    */
    'scopes': Array<string>;
    'lastUse': LastUse;
    /**
    * Datestring
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>"
        },
        {
            "name": "lastUse",
            "baseName": "lastUse",
            "type": "LastUse"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return GetASPResponse.attributeTypeMap;
    }
}
