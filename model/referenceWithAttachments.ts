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
* Optional referenced email. If uploaded message is a reply draft and relevant fields are not provided then these are resolved from the message to be replied to
*/
export class ReferenceWithAttachments {
    /**
    * Mailbox ID
    */
    'mailbox': string;
    /**
    * Message ID in Mailbox
    */
    'id': number;
    /**
    * Either reply, replyAll or forward
    */
    'action': string;
    /**
    * If true, then includes all attachments from the original message. If it is an array of attachment ID\'s includes attachments from the list
    */
    'attachments': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mailbox",
            "baseName": "mailbox",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ReferenceWithAttachments.attributeTypeMap;
    }
}

