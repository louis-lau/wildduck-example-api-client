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
import { AddressLimits } from './addressLimits';
import { AutoreplyInfo } from './autoreplyInfo';

export class GetForwardedAddressResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * ID of the Address
    */
    'id': string;
    /**
    * E-mail address string
    */
    'address': string;
    /**
    * Identity name
    */
    'name': string;
    /**
    * List of forwarding targets
    */
    'targets': Array<string>;
    'limits': AddressLimits;
    'autoreply': AutoreplyInfo;
    /**
    * Datestring of the time the address was created
    */
    'created': Date;
    /**
    * List of tags associated with the Address
    */
    'tags': Array<string>;
    /**
    * If true then the forwarded address is disabled
    */
    'forwardedDisabled': boolean;

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
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<string>"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "AddressLimits"
        },
        {
            "name": "autoreply",
            "baseName": "autoreply",
            "type": "AutoreplyInfo"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "forwardedDisabled",
            "baseName": "forwardedDisabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return GetForwardedAddressResponse.attributeTypeMap;
    }
}

