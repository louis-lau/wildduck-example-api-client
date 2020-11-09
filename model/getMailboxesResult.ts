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

export class GetMailboxesResult {
    /**
    * Mailbox ID
    */
    'id': string;
    /**
    * Name for the mailbox (unicode string)
    */
    'name': string;
    /**
    * Full path of the mailbox, folders are separated by slashes, ends with the mailbox name (unicode string)
    */
    'path': string;
    /**
    * Either special use identifier or null. One of \\Drafts, \\Junk, \\Sent or \\Trash
    */
    'specialUse': string;
    /**
    * Modification sequence number. Incremented on every change in the mailbox.
    */
    'modifyIndex': number;
    /**
    * Mailbox subscription status. IMAP clients may unsubscribe from a folder.
    */
    'subscribed': boolean;
    /**
    * Is the folder hidden or not
    */
    'hidden': boolean;
    /**
    * How many messages are stored in this mailbox
    */
    'total': number;
    /**
    * How many unseen messages are stored in this mailbox
    */
    'unseen': number;

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
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "specialUse",
            "baseName": "specialUse",
            "type": "string"
        },
        {
            "name": "modifyIndex",
            "baseName": "modifyIndex",
            "type": "number"
        },
        {
            "name": "subscribed",
            "baseName": "subscribed",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "unseen",
            "baseName": "unseen",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetMailboxesResult.attributeTypeMap;
    }
}

