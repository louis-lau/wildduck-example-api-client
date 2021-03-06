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
import { KeyInfo } from './keyInfo';
import { UserLimits } from './userLimits';

export class GetUserResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
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
    * Default retention time in ms. false if not enabled
    */
    'retention': number;
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
    /**
    * Public PGP key for the User that is used for encryption
    */
    'pubKey': string;
    'keyInfo': KeyInfo;
    /**
    * Custom metadata object set for this user
    */
    'metaData': object;
    /**
    * Custom interna metadata object set for this user. Not available for user-role tokens
    */
    'internalData': object;
    /**
    * List of forwarding targets
    */
    'targets': Array<string>;
    /**
    * Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam
    */
    'spamLevel': number;
    'limits': UserLimits;
    /**
    * List of tags associated with the User
    */
    'tags': Array<string>;
    /**
    * A list of additional email addresses this user can send mail from. Wildcard is allowed.
    */
    'fromWhitelist'?: Array<string>;
    /**
    * Disabled scopes for this user
    */
    'disabledScopes': Array<string>;
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
            "name": "retention",
            "baseName": "retention",
            "type": "number"
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
            "name": "pubKey",
            "baseName": "pubKey",
            "type": "string"
        },
        {
            "name": "keyInfo",
            "baseName": "keyInfo",
            "type": "KeyInfo"
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
            "name": "targets",
            "baseName": "targets",
            "type": "Array<string>"
        },
        {
            "name": "spamLevel",
            "baseName": "spamLevel",
            "type": "number"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "UserLimits"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "fromWhitelist",
            "baseName": "fromWhitelist",
            "type": "Array<string>"
        },
        {
            "name": "disabledScopes",
            "baseName": "disabledScopes",
            "type": "Array<string>"
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
        return GetUserResponse.attributeTypeMap;
    }
}

