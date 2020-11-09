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
import { Address } from './address';
import { ContentType } from './contentType';

export class GetArchivedMessagesResult {
    /**
    * ID of the Message (24 byte hex)
    */
    'id': string;
    /**
    * ID of the Mailbox
    */
    'mailbox': string;
    /**
    * ID of the Thread
    */
    'thread': string;
    'from': Address;
    /**
    * Recipients in To: field
    */
    'to': Array<Address>;
    /**
    * Recipients in Cc: field
    */
    'cc': Array<Address>;
    /**
    * Recipients in Bcc: field. Usually only available for drafts
    */
    'bcc': Array<Address>;
    /**
    * Message subject
    */
    'subject': string;
    /**
    * Datestring
    */
    'date': Date;
    /**
    * First 128 bytes of the message
    */
    'intro': string;
    /**
    * Does the message have attachments
    */
    'attachments': boolean;
    /**
    * Is this message alread seen or not
    */
    'seen': boolean;
    /**
    * Does this message have a \\Deleted flag (should not have as messages are automatically deleted once this flag is set)
    */
    'deleted': boolean;
    /**
    * Does this message have a \\Flagged flag
    */
    'flagged': boolean;
    'contentType': ContentType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "mailbox",
            "baseName": "mailbox",
            "type": "string"
        },
        {
            "name": "thread",
            "baseName": "thread",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "Address"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<Address>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<Address>"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<Address>"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "intro",
            "baseName": "intro",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "boolean"
        },
        {
            "name": "seen",
            "baseName": "seen",
            "type": "boolean"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "flagged",
            "baseName": "flagged",
            "type": "boolean"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "ContentType"
        }    ];

    static getAttributeTypeMap() {
        return GetArchivedMessagesResult.attributeTypeMap;
    }
}

