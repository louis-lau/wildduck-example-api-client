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

export class CreateMailboxRequest {
    /**
    * Full path of the mailbox, folders are separated by slashes, ends with the mailbox name (unicode string)
    */
    'path': string;
    /**
    * Is the folder hidden or not. Hidden folders can not be opened in IMAP.
    */
    'hidden'?: boolean;
    /**
    * Retention policy for the created Mailbox. Milliseconds after a message added to mailbox expires. Set to 0 to disable.
    */
    'retention'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "retention",
            "baseName": "retention",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CreateMailboxRequest.attributeTypeMap;
    }
}

