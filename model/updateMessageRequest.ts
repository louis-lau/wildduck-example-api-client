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

export class UpdateMessageRequest {
    /**
    * Message ID values. Either comma separated numbers (1,2,3) or colon separated range (3:15)
    */
    'message': string;
    /**
    * ID of the target Mailbox if you want to move messages
    */
    'moveTo': string;
    /**
    * State of the \\Seen flag
    */
    'seen': boolean;
    /**
    * State of the \\Flagged flag
    */
    'flagged': boolean;
    /**
    * State of the \\Draft flag
    */
    'draft': boolean;
    /**
    * Either expiration date or false to turn of autoexpiration
    */
    'expires': string;
    /**
    * Optional metadata, must be an object or JSON formatted string
    */
    'metaData'?: object | string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "moveTo",
            "baseName": "moveTo",
            "type": "string"
        },
        {
            "name": "seen",
            "baseName": "seen",
            "type": "boolean"
        },
        {
            "name": "flagged",
            "baseName": "flagged",
            "type": "boolean"
        },
        {
            "name": "draft",
            "baseName": "draft",
            "type": "boolean"
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object | string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateMessageRequest.attributeTypeMap;
    }
}

