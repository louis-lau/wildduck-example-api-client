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

export class UpdateUserAddressRequest {
    /**
    * Identity name
    */
    'name'?: string;
    /**
    * New address if you want to rename existing address. Only affects normal addresses, special addresses that include * can not be changed
    */
    'address'?: string;
    /**
    * Indicates if this is the default address for the User
    */
    'main': boolean;
    /**
    * Optional metadata, must be an object or JSON formatted string
    */
    'metaData'?: object | string;
    /**
    * Optional metadata for internal use, must be an object or JSON formatted string of an object. Not available for user-role tokens
    */
    'internalData'?: object | string;
    /**
    * A list of tags associated with this address
    */
    'tags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "main",
            "baseName": "main",
            "type": "boolean"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object | string"
        },
        {
            "name": "internalData",
            "baseName": "internalData",
            "type": "object | string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserAddressRequest.attributeTypeMap;
    }
}

