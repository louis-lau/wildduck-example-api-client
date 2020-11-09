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

export class CreateASPResponse {
    /**
    * Indicates successful response
    */
    'success': boolean;
    /**
    * ID of the Application Password
    */
    'id': string;
    /**
    * Application Specific Password. Generated password is whitespace agnostic, so it could be displayed to the client as \"abcd efgh ijkl mnop\" instead of \"abcdefghijklmnop\"
    */
    'password': string;
    /**
    * Base64 encoded mobileconfig file. Generated profile file should be sent to the client with Content-Type value of application/x-apple-aspen-config.
    */
    'mobileconfig': string;

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
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "mobileconfig",
            "baseName": "mobileconfig",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateASPResponse.attributeTypeMap;
    }
}
