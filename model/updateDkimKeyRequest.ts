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

export class UpdateDkimKeyRequest {
    /**
    * Domain name this DKIM key applies to. Use \"*\" as a special value that will be used for domains that do not have their own DKIM key set
    */
    'domain': string;
    /**
    * Selector for the key
    */
    'selector': string;
    /**
    * Key description
    */
    'description'?: string;
    /**
    * Pem formatted DKIM private key. If not set then a new 2048 bit RSA key is generated, beware though that it can take several seconds to complete.
    */
    'privateKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "privateKey",
            "baseName": "privateKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateDkimKeyRequest.attributeTypeMap;
    }
}

