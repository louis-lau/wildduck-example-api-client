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

export class RestoreMessageResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * Maibox ID the message was moved to
    */
    'mailbox': string;
    /**
    * New ID for the Message
    */
    'id': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "mailbox",
            "baseName": "mailbox",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RestoreMessageResponse.attributeTypeMap;
    }
}

