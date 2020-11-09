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
import { GetUserAddressesResult } from './getUserAddressesResult';

export class GetUserAddressesResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * Address listing
    */
    'results': Array<GetUserAddressesResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<GetUserAddressesResult>"
        }    ];

    static getAttributeTypeMap() {
        return GetUserAddressesResponse.attributeTypeMap;
    }
}
