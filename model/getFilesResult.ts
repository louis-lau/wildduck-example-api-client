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

export class GetFilesResult {
    /**
    * ID of the File
    */
    'id': string;
    /**
    * Filename
    */
    'filename': string;
    /**
    * Content-Type of the file
    */
    'contentType': string;
    /**
    * File size
    */
    'size': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetFilesResult.attributeTypeMap;
    }
}

