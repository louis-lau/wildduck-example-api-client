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

/**
* Action to take with a matching message
*/
export class Action {
    /**
    * If true then mark matching messages as Seen
    */
    'seen'?: boolean;
    /**
    * If true then mark matching messages as Flagged
    */
    'flag'?: boolean;
    /**
    * If true then do not store matching messages
    */
    '_delete'?: boolean;
    /**
    * If true then store matching messags to Junk Mail folder
    */
    'spam'?: boolean;
    /**
    * Mailbox ID to store matching messages to
    */
    'mailbox'?: string;
    /**
    * An array of forwarding targets. The value could either be an email address or a relay url to next MX server (\"smtp://mx2.zone.eu:25\") or an URL where mail contents are POSTed to
    */
    'targets'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "seen",
            "baseName": "seen",
            "type": "boolean"
        },
        {
            "name": "flag",
            "baseName": "flag",
            "type": "boolean"
        },
        {
            "name": "_delete",
            "baseName": "delete",
            "type": "boolean"
        },
        {
            "name": "spam",
            "baseName": "spam",
            "type": "boolean"
        },
        {
            "name": "mailbox",
            "baseName": "mailbox",
            "type": "string"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Action.attributeTypeMap;
    }
}

