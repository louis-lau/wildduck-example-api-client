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
import { Attachments } from './attachments';
import { ContentType } from './contentType';
import { Envelope } from './envelope';
import { Files } from './files';
import { List } from './list';
import { VerificationResults } from './verificationResults';

export class GetMessageResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * ID of the Message
    */
    'id': number;
    /**
    * ID of the Mailbox
    */
    'mailbox': string;
    /**
    * ID of the User
    */
    'user': string;
    'envelope': Envelope;
    /**
    * ID of the Thread
    */
    'thread': string;
    'from': Address;
    'to': Address;
    'cc': Address;
    'bcc': Address;
    /**
    * Message subject
    */
    'subject': string;
    /**
    * Message-ID header
    */
    'messageId': string;
    /**
    * Datestring of message header
    */
    'date': Date;
    'list': List;
    /**
    * Datestring, if set then indicates the time after this message is automatically deleted
    */
    'expires': string;
    /**
    * Does this message have a \\Seen flag
    */
    'seen': boolean;
    /**
    * Does this message have a \\Deleted flag
    */
    'deleted': boolean;
    /**
    * Does this message have a \\Flagged flag
    */
    'flagged': boolean;
    /**
    * Does this message have a \\Draft flag
    */
    'draft': boolean;
    /**
    * An array of HTML string. Every array element is from a separate mime node, usually you would just join these to a single string
    */
    'html': Array<string>;
    /**
    * Plaintext content of the message
    */
    'text': string;
    'attachments'?: Attachments;
    'verificationResults'?: VerificationResults;
    'contentType': ContentType;
    /**
    * Custom metadata object set for this message
    */
    'metaData': object;
    /**
    * Referenced message info
    */
    'reference': object;
    'files'?: Files;

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
            "type": "number"
        },
        {
            "name": "mailbox",
            "baseName": "mailbox",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "envelope",
            "baseName": "envelope",
            "type": "Envelope"
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
            "type": "Address"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Address"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Address"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "list",
            "baseName": "list",
            "type": "List"
        },
        {
            "name": "expires",
            "baseName": "expires",
            "type": "string"
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
            "name": "draft",
            "baseName": "draft",
            "type": "boolean"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "Array<string>"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Attachments"
        },
        {
            "name": "verificationResults",
            "baseName": "verificationResults",
            "type": "VerificationResults"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "ContentType"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "object"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Files"
        }    ];

    static getAttributeTypeMap() {
        return GetMessageResponse.attributeTypeMap;
    }
}

