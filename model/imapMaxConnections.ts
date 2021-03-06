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

export class ImapMaxConnections {
    /**
    * How many parallel IMAP connections are permitted
    */
    'allowed': number;
    /**
    * How many parallel IMAP connections are currenlty in use
    */
    'used': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "number"
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ImapMaxConnections.attributeTypeMap;
    }
}

