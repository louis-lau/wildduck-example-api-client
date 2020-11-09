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

export class ResetUserPasswordRequest {
    /**
    * Allow using the generated password not earlier than provided time
    */
    'validAfter'?: string;
    /**
    * Session identifier for the logs
    */
    'sess'?: string;
    /**
    * IP address for the logs
    */
    'ip'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "validAfter",
            "baseName": "validAfter",
            "type": "string"
        },
        {
            "name": "sess",
            "baseName": "sess",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResetUserPasswordRequest.attributeTypeMap;
    }
}
