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
import { Rcpt } from './rcpt';

/**
* SMTP envelope (if available)
*/
export class Envelope {
    /**
    * Address from MAIL FROM
    */
    'from': string;
    'rcpt': Rcpt;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "rcpt",
            "baseName": "rcpt",
            "type": "Rcpt"
        }    ];

    static getAttributeTypeMap() {
        return Envelope.attributeTypeMap;
    }
}
