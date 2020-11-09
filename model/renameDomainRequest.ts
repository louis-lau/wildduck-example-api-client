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

export class RenameDomainRequest {
    /**
    * Old Domain Name
    */
    'oldDomain': string;
    /**
    * New Domain Name
    */
    'newDomain': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "oldDomain",
            "baseName": "oldDomain",
            "type": "string"
        },
        {
            "name": "newDomain",
            "baseName": "newDomain",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RenameDomainRequest.attributeTypeMap;
    }
}
