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

export class SubmitStoredMessageRequest {
    /**
    * If true then deletes attachment files listed in metaData.files array
    */
    'deleteFiles': boolean;
    /**
    * Datestring for delivery if message should be sent some later time
    */
    'sendTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleteFiles",
            "baseName": "deleteFiles",
            "type": "boolean"
        },
        {
            "name": "sendTime",
            "baseName": "sendTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SubmitStoredMessageRequest.attributeTypeMap;
    }
}
