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
import { Quota } from './quota';

export class GetUsersResult {
    /**
    * Users unique ID (24 byte hex)
    */
    'id': string;
    /**
    * Username of the User
    */
    'username': string;
    /**
    * Name of the User
    */
    'name': string;
    /**
    * Main email address of the User
    */
    'address': string;
    /**
    * List of tags associated with the User\'
    */
    'tags': Array<string>;
    /**
    * List of forwarding targets
    */
    'targets': Array<string>;
    /**
    * List of enabled 2FA methods
    */
    'enabled2fa': Array<string>;
    /**
    * Is autoreply enabled or not (start time may still be in the future or end time in the past)
    */
    'autoreply': boolean;
    /**
    * If true then received messages are encrypted
    */
    'encryptMessages': boolean;
    /**
    * If true then forwarded messages are encrypted
    */
    'encryptForwarded': boolean;
    'quota': Quota;
    /**
    * Custom metadata value. Included if metaData query argument was true
    */
    'metaData'?: object;
    /**
    * Custom metadata value for internal use. Included if internalData query argument was true and request was not made using user-role token
    */
    'internalData'?: object;
    /**
    * If true then the User has a password set and can authenticate
    */
    'hasPasswordSet': boolean;
    /**
    * Is the account activated
    */
    'activated': boolean;
    /**
    * If true then the user can not authenticate or receive any new mail
    */
    'disabled': boolean;
    /**
    * If true then the user can not authenticate
    */
    'suspended': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<string>"
        },
        {
            "name": "enabled2fa",
            "baseName": "enabled2fa",
            "type": "Array<string>"
        },
        {
            "name": "autoreply",
            "baseName": "autoreply",
            "type": "boolean"
        },
        {
            "name": "encryptMessages",
            "baseName": "encryptMessages",
            "type": "boolean"
        },
        {
            "name": "encryptForwarded",
            "baseName": "encryptForwarded",
            "type": "boolean"
        },
        {
            "name": "quota",
            "baseName": "quota",
            "type": "Quota"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        },
        {
            "name": "internalData",
            "baseName": "internalData",
            "type": "object"
        },
        {
            "name": "hasPasswordSet",
            "baseName": "hasPasswordSet",
            "type": "boolean"
        },
        {
            "name": "activated",
            "baseName": "activated",
            "type": "boolean"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "suspended",
            "baseName": "suspended",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetUsersResult.attributeTypeMap;
    }
}

