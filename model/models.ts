export * from './action';
export * from './address';
export * from './addressLimits';
export * from './addressOptionalName';
export * from './attachments';
export * from './attachmentsUpload';
export * from './authenticateRequest';
export * from './authenticateResponse';
export * from './autoreply';
export * from './autoreplyInfo';
export * from './checkTotp2FARequest';
export * from './contentType';
export * from './createASPRequest';
export * from './createASPResponse';
export * from './createAllowedDomainRequest';
export * from './createAllowedDomainResponse';
export * from './createAuditRequest';
export * from './createAuditResponse';
export * from './createBlockedDomainRequest';
export * from './createBlockedDomainResponse';
export * from './createDomainAliasRequest';
export * from './createDomainAliasResponse';
export * from './createFilterRequest';
export * from './createForwardedAddressRequest';
export * from './createForwardedAddressResponse';
export * from './createMailboxRequest';
export * from './createMailboxResponse';
export * from './createUserAddressRequest';
export * from './createUserAddressResponse';
export * from './createUserRequest';
export * from './createUserResponse';
export * from './createWebhookRequest';
export * from './createWebhookResponse';
export * from './deleteMessagesInMailboxResponse';
export * from './dnsTxt';
export * from './enableCustom2FARequest';
export * from './enableTotp2FARequest';
export * from './envelope';
export * from './envelopeUpload';
export * from './files';
export * from './forwardStoredMessageRequest';
export * from './forwardStoredMessageResponse';
export * from './forwarded';
export * from './forwards';
export * from './getASPResponse';
export * from './getASPsResponse';
export * from './getASPsResult';
export * from './getAddressesResponse';
export * from './getAddressesResult';
export * from './getAllowedDomainResponse';
export * from './getAllowedDomainResult';
export * from './getArchivedMessagesResponse';
export * from './getArchivedMessagesResult';
export * from './getAuditResponse';
export * from './getAuthlogEventResponse';
export * from './getAuthlogResponse';
export * from './getAuthlogResult';
export * from './getAutoreplyResponse';
export * from './getBlockedDomainResponse';
export * from './getBlockedDomainResult';
export * from './getDkimKeyResponse';
export * from './getDkimKeysResponse';
export * from './getDkimKeysResult';
export * from './getDomainAliasResponse';
export * from './getDomainAliasesResponse';
export * from './getDomainAliasesResult';
export * from './getFilesResponse';
export * from './getFilesResult';
export * from './getFilterResponse';
export * from './getFiltersResponse';
export * from './getFiltersResult';
export * from './getForwardedAddressResponse';
export * from './getMailboxResponse';
export * from './getMailboxesResponse';
export * from './getMailboxesResult';
export * from './getMessageResponse';
export * from './getMessagesResponse';
export * from './getMessagesResult';
export * from './getUserAddressResponse';
export * from './getUserAddressesResponse';
export * from './getUserAddressesResult';
export * from './getUserResponse';
export * from './getUsersResponse';
export * from './getUsersResult';
export * from './getWebhooksResponse';
export * from './getWebhooksResult';
export * from './header';
export * from './imapDownload';
export * from './imapMaxConnections';
export * from './imapUpload';
export * from './inlineObject';
export * from './keyInfo';
export * from './lastUse';
export * from './list';
export * from './logoutUserRequest';
export * from './mailboxes';
export * from './message';
export * from './messageWithQueueId';
export * from './pop3Download';
export * from './query';
export * from './quota';
export * from './rcpt';
export * from './recalculateQuotaResponse';
export * from './received';
export * from './recipients';
export * from './reference';
export * from './referenceWithAttachments';
export * from './renameDomainRequest';
export * from './resetUserPasswordRequest';
export * from './resetUserPasswordResponse';
export * from './resolveAddressResponse';
export * from './resolveDkimResponse';
export * from './resolveDomainAliasResponse';
export * from './resolveUserResponse';
export * from './restoreMessageRequest';
export * from './restoreMessageResponse';
export * from './restoreMessagesRequest';
export * from './searchMessagesResponse';
export * from './searchMessagesResult';
export * from './setupTotp2FARequest';
export * from './setupTotp2FAResponse';
export * from './specialUse';
export * from './submitMessageRequest';
export * from './submitMessageResponse';
export * from './submitStoredMessageRequest';
export * from './submitStoredMessageResponse';
export * from './successResponse';
export * from './tls';
export * from './updateAutoreplyRequest';
export * from './updateDkimKeyRequest';
export * from './updateDkimKeyResponse';
export * from './updateFilterRequest';
export * from './updateFilterResponse';
export * from './updateForwardedAddressRequest';
export * from './updateMailboxRequest';
export * from './updateMessageRequest';
export * from './updateMessageResponse';
export * from './updateUserAddressRequest';
export * from './updateUserRequest';
export * from './uploadFileResponse';
export * from './uploadMessageRequest';
export * from './uploadMessageResponse';
export * from './userLimits';
export * from './verificationResults';

import localVarRequest = require('request');

import { Action } from './action';
import { Address } from './address';
import { AddressLimits } from './addressLimits';
import { AddressOptionalName } from './addressOptionalName';
import { Attachments } from './attachments';
import { AttachmentsUpload } from './attachmentsUpload';
import { AuthenticateRequest } from './authenticateRequest';
import { AuthenticateResponse } from './authenticateResponse';
import { Autoreply } from './autoreply';
import { AutoreplyInfo } from './autoreplyInfo';
import { CheckTotp2FARequest } from './checkTotp2FARequest';
import { ContentType } from './contentType';
import { CreateASPRequest } from './createASPRequest';
import { CreateASPResponse } from './createASPResponse';
import { CreateAllowedDomainRequest } from './createAllowedDomainRequest';
import { CreateAllowedDomainResponse } from './createAllowedDomainResponse';
import { CreateAuditRequest } from './createAuditRequest';
import { CreateAuditResponse } from './createAuditResponse';
import { CreateBlockedDomainRequest } from './createBlockedDomainRequest';
import { CreateBlockedDomainResponse } from './createBlockedDomainResponse';
import { CreateDomainAliasRequest } from './createDomainAliasRequest';
import { CreateDomainAliasResponse } from './createDomainAliasResponse';
import { CreateFilterRequest } from './createFilterRequest';
import { CreateForwardedAddressRequest } from './createForwardedAddressRequest';
import { CreateForwardedAddressResponse } from './createForwardedAddressResponse';
import { CreateMailboxRequest } from './createMailboxRequest';
import { CreateMailboxResponse } from './createMailboxResponse';
import { CreateUserAddressRequest } from './createUserAddressRequest';
import { CreateUserAddressResponse } from './createUserAddressResponse';
import { CreateUserRequest } from './createUserRequest';
import { CreateUserResponse } from './createUserResponse';
import { CreateWebhookRequest } from './createWebhookRequest';
import { CreateWebhookResponse } from './createWebhookResponse';
import { DeleteMessagesInMailboxResponse } from './deleteMessagesInMailboxResponse';
import { DnsTxt } from './dnsTxt';
import { EnableCustom2FARequest } from './enableCustom2FARequest';
import { EnableTotp2FARequest } from './enableTotp2FARequest';
import { Envelope } from './envelope';
import { EnvelopeUpload } from './envelopeUpload';
import { Files } from './files';
import { ForwardStoredMessageRequest } from './forwardStoredMessageRequest';
import { ForwardStoredMessageResponse } from './forwardStoredMessageResponse';
import { Forwarded } from './forwarded';
import { Forwards } from './forwards';
import { GetASPResponse } from './getASPResponse';
import { GetASPsResponse } from './getASPsResponse';
import { GetASPsResult } from './getASPsResult';
import { GetAddressesResponse } from './getAddressesResponse';
import { GetAddressesResult } from './getAddressesResult';
import { GetAllowedDomainResponse } from './getAllowedDomainResponse';
import { GetAllowedDomainResult } from './getAllowedDomainResult';
import { GetArchivedMessagesResponse } from './getArchivedMessagesResponse';
import { GetArchivedMessagesResult } from './getArchivedMessagesResult';
import { GetAuditResponse } from './getAuditResponse';
import { GetAuthlogEventResponse } from './getAuthlogEventResponse';
import { GetAuthlogResponse } from './getAuthlogResponse';
import { GetAuthlogResult } from './getAuthlogResult';
import { GetAutoreplyResponse } from './getAutoreplyResponse';
import { GetBlockedDomainResponse } from './getBlockedDomainResponse';
import { GetBlockedDomainResult } from './getBlockedDomainResult';
import { GetDkimKeyResponse } from './getDkimKeyResponse';
import { GetDkimKeysResponse } from './getDkimKeysResponse';
import { GetDkimKeysResult } from './getDkimKeysResult';
import { GetDomainAliasResponse } from './getDomainAliasResponse';
import { GetDomainAliasesResponse } from './getDomainAliasesResponse';
import { GetDomainAliasesResult } from './getDomainAliasesResult';
import { GetFilesResponse } from './getFilesResponse';
import { GetFilesResult } from './getFilesResult';
import { GetFilterResponse } from './getFilterResponse';
import { GetFiltersResponse } from './getFiltersResponse';
import { GetFiltersResult } from './getFiltersResult';
import { GetForwardedAddressResponse } from './getForwardedAddressResponse';
import { GetMailboxResponse } from './getMailboxResponse';
import { GetMailboxesResponse } from './getMailboxesResponse';
import { GetMailboxesResult } from './getMailboxesResult';
import { GetMessageResponse } from './getMessageResponse';
import { GetMessagesResponse } from './getMessagesResponse';
import { GetMessagesResult } from './getMessagesResult';
import { GetUserAddressResponse } from './getUserAddressResponse';
import { GetUserAddressesResponse } from './getUserAddressesResponse';
import { GetUserAddressesResult } from './getUserAddressesResult';
import { GetUserResponse } from './getUserResponse';
import { GetUsersResponse } from './getUsersResponse';
import { GetUsersResult } from './getUsersResult';
import { GetWebhooksResponse } from './getWebhooksResponse';
import { GetWebhooksResult } from './getWebhooksResult';
import { Header } from './header';
import { ImapDownload } from './imapDownload';
import { ImapMaxConnections } from './imapMaxConnections';
import { ImapUpload } from './imapUpload';
import { InlineObject } from './inlineObject';
import { KeyInfo } from './keyInfo';
import { LastUse } from './lastUse';
import { List } from './list';
import { LogoutUserRequest } from './logoutUserRequest';
import { Mailboxes } from './mailboxes';
import { Message } from './message';
import { MessageWithQueueId } from './messageWithQueueId';
import { Pop3Download } from './pop3Download';
import { Query } from './query';
import { Quota } from './quota';
import { Rcpt } from './rcpt';
import { RecalculateQuotaResponse } from './recalculateQuotaResponse';
import { Received } from './received';
import { Recipients } from './recipients';
import { Reference } from './reference';
import { ReferenceWithAttachments } from './referenceWithAttachments';
import { RenameDomainRequest } from './renameDomainRequest';
import { ResetUserPasswordRequest } from './resetUserPasswordRequest';
import { ResetUserPasswordResponse } from './resetUserPasswordResponse';
import { ResolveAddressResponse } from './resolveAddressResponse';
import { ResolveDkimResponse } from './resolveDkimResponse';
import { ResolveDomainAliasResponse } from './resolveDomainAliasResponse';
import { ResolveUserResponse } from './resolveUserResponse';
import { RestoreMessageRequest } from './restoreMessageRequest';
import { RestoreMessageResponse } from './restoreMessageResponse';
import { RestoreMessagesRequest } from './restoreMessagesRequest';
import { SearchMessagesResponse } from './searchMessagesResponse';
import { SearchMessagesResult } from './searchMessagesResult';
import { SetupTotp2FARequest } from './setupTotp2FARequest';
import { SetupTotp2FAResponse } from './setupTotp2FAResponse';
import { SpecialUse } from './specialUse';
import { SubmitMessageRequest } from './submitMessageRequest';
import { SubmitMessageResponse } from './submitMessageResponse';
import { SubmitStoredMessageRequest } from './submitStoredMessageRequest';
import { SubmitStoredMessageResponse } from './submitStoredMessageResponse';
import { SuccessResponse } from './successResponse';
import { Tls } from './tls';
import { UpdateAutoreplyRequest } from './updateAutoreplyRequest';
import { UpdateDkimKeyRequest } from './updateDkimKeyRequest';
import { UpdateDkimKeyResponse } from './updateDkimKeyResponse';
import { UpdateFilterRequest } from './updateFilterRequest';
import { UpdateFilterResponse } from './updateFilterResponse';
import { UpdateForwardedAddressRequest } from './updateForwardedAddressRequest';
import { UpdateMailboxRequest } from './updateMailboxRequest';
import { UpdateMessageRequest } from './updateMessageRequest';
import { UpdateMessageResponse } from './updateMessageResponse';
import { UpdateUserAddressRequest } from './updateUserAddressRequest';
import { UpdateUserRequest } from './updateUserRequest';
import { UploadFileResponse } from './uploadFileResponse';
import { UploadMessageRequest } from './uploadMessageRequest';
import { UploadMessageResponse } from './uploadMessageResponse';
import { UserLimits } from './userLimits';
import { VerificationResults } from './verificationResults';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "SpecialUse": SpecialUse,
}

let typeMap: {[index: string]: any} = {
    "Action": Action,
    "Address": Address,
    "AddressLimits": AddressLimits,
    "AddressOptionalName": AddressOptionalName,
    "Attachments": Attachments,
    "AttachmentsUpload": AttachmentsUpload,
    "AuthenticateRequest": AuthenticateRequest,
    "AuthenticateResponse": AuthenticateResponse,
    "Autoreply": Autoreply,
    "AutoreplyInfo": AutoreplyInfo,
    "CheckTotp2FARequest": CheckTotp2FARequest,
    "ContentType": ContentType,
    "CreateASPRequest": CreateASPRequest,
    "CreateASPResponse": CreateASPResponse,
    "CreateAllowedDomainRequest": CreateAllowedDomainRequest,
    "CreateAllowedDomainResponse": CreateAllowedDomainResponse,
    "CreateAuditRequest": CreateAuditRequest,
    "CreateAuditResponse": CreateAuditResponse,
    "CreateBlockedDomainRequest": CreateBlockedDomainRequest,
    "CreateBlockedDomainResponse": CreateBlockedDomainResponse,
    "CreateDomainAliasRequest": CreateDomainAliasRequest,
    "CreateDomainAliasResponse": CreateDomainAliasResponse,
    "CreateFilterRequest": CreateFilterRequest,
    "CreateForwardedAddressRequest": CreateForwardedAddressRequest,
    "CreateForwardedAddressResponse": CreateForwardedAddressResponse,
    "CreateMailboxRequest": CreateMailboxRequest,
    "CreateMailboxResponse": CreateMailboxResponse,
    "CreateUserAddressRequest": CreateUserAddressRequest,
    "CreateUserAddressResponse": CreateUserAddressResponse,
    "CreateUserRequest": CreateUserRequest,
    "CreateUserResponse": CreateUserResponse,
    "CreateWebhookRequest": CreateWebhookRequest,
    "CreateWebhookResponse": CreateWebhookResponse,
    "DeleteMessagesInMailboxResponse": DeleteMessagesInMailboxResponse,
    "DnsTxt": DnsTxt,
    "EnableCustom2FARequest": EnableCustom2FARequest,
    "EnableTotp2FARequest": EnableTotp2FARequest,
    "Envelope": Envelope,
    "EnvelopeUpload": EnvelopeUpload,
    "Files": Files,
    "ForwardStoredMessageRequest": ForwardStoredMessageRequest,
    "ForwardStoredMessageResponse": ForwardStoredMessageResponse,
    "Forwarded": Forwarded,
    "Forwards": Forwards,
    "GetASPResponse": GetASPResponse,
    "GetASPsResponse": GetASPsResponse,
    "GetASPsResult": GetASPsResult,
    "GetAddressesResponse": GetAddressesResponse,
    "GetAddressesResult": GetAddressesResult,
    "GetAllowedDomainResponse": GetAllowedDomainResponse,
    "GetAllowedDomainResult": GetAllowedDomainResult,
    "GetArchivedMessagesResponse": GetArchivedMessagesResponse,
    "GetArchivedMessagesResult": GetArchivedMessagesResult,
    "GetAuditResponse": GetAuditResponse,
    "GetAuthlogEventResponse": GetAuthlogEventResponse,
    "GetAuthlogResponse": GetAuthlogResponse,
    "GetAuthlogResult": GetAuthlogResult,
    "GetAutoreplyResponse": GetAutoreplyResponse,
    "GetBlockedDomainResponse": GetBlockedDomainResponse,
    "GetBlockedDomainResult": GetBlockedDomainResult,
    "GetDkimKeyResponse": GetDkimKeyResponse,
    "GetDkimKeysResponse": GetDkimKeysResponse,
    "GetDkimKeysResult": GetDkimKeysResult,
    "GetDomainAliasResponse": GetDomainAliasResponse,
    "GetDomainAliasesResponse": GetDomainAliasesResponse,
    "GetDomainAliasesResult": GetDomainAliasesResult,
    "GetFilesResponse": GetFilesResponse,
    "GetFilesResult": GetFilesResult,
    "GetFilterResponse": GetFilterResponse,
    "GetFiltersResponse": GetFiltersResponse,
    "GetFiltersResult": GetFiltersResult,
    "GetForwardedAddressResponse": GetForwardedAddressResponse,
    "GetMailboxResponse": GetMailboxResponse,
    "GetMailboxesResponse": GetMailboxesResponse,
    "GetMailboxesResult": GetMailboxesResult,
    "GetMessageResponse": GetMessageResponse,
    "GetMessagesResponse": GetMessagesResponse,
    "GetMessagesResult": GetMessagesResult,
    "GetUserAddressResponse": GetUserAddressResponse,
    "GetUserAddressesResponse": GetUserAddressesResponse,
    "GetUserAddressesResult": GetUserAddressesResult,
    "GetUserResponse": GetUserResponse,
    "GetUsersResponse": GetUsersResponse,
    "GetUsersResult": GetUsersResult,
    "GetWebhooksResponse": GetWebhooksResponse,
    "GetWebhooksResult": GetWebhooksResult,
    "Header": Header,
    "ImapDownload": ImapDownload,
    "ImapMaxConnections": ImapMaxConnections,
    "ImapUpload": ImapUpload,
    "InlineObject": InlineObject,
    "KeyInfo": KeyInfo,
    "LastUse": LastUse,
    "List": List,
    "LogoutUserRequest": LogoutUserRequest,
    "Mailboxes": Mailboxes,
    "Message": Message,
    "MessageWithQueueId": MessageWithQueueId,
    "Pop3Download": Pop3Download,
    "Query": Query,
    "Quota": Quota,
    "Rcpt": Rcpt,
    "RecalculateQuotaResponse": RecalculateQuotaResponse,
    "Received": Received,
    "Recipients": Recipients,
    "Reference": Reference,
    "ReferenceWithAttachments": ReferenceWithAttachments,
    "RenameDomainRequest": RenameDomainRequest,
    "ResetUserPasswordRequest": ResetUserPasswordRequest,
    "ResetUserPasswordResponse": ResetUserPasswordResponse,
    "ResolveAddressResponse": ResolveAddressResponse,
    "ResolveDkimResponse": ResolveDkimResponse,
    "ResolveDomainAliasResponse": ResolveDomainAliasResponse,
    "ResolveUserResponse": ResolveUserResponse,
    "RestoreMessageRequest": RestoreMessageRequest,
    "RestoreMessageResponse": RestoreMessageResponse,
    "RestoreMessagesRequest": RestoreMessagesRequest,
    "SearchMessagesResponse": SearchMessagesResponse,
    "SearchMessagesResult": SearchMessagesResult,
    "SetupTotp2FARequest": SetupTotp2FARequest,
    "SetupTotp2FAResponse": SetupTotp2FAResponse,
    "SubmitMessageRequest": SubmitMessageRequest,
    "SubmitMessageResponse": SubmitMessageResponse,
    "SubmitStoredMessageRequest": SubmitStoredMessageRequest,
    "SubmitStoredMessageResponse": SubmitStoredMessageResponse,
    "SuccessResponse": SuccessResponse,
    "Tls": Tls,
    "UpdateAutoreplyRequest": UpdateAutoreplyRequest,
    "UpdateDkimKeyRequest": UpdateDkimKeyRequest,
    "UpdateDkimKeyResponse": UpdateDkimKeyResponse,
    "UpdateFilterRequest": UpdateFilterRequest,
    "UpdateFilterResponse": UpdateFilterResponse,
    "UpdateForwardedAddressRequest": UpdateForwardedAddressRequest,
    "UpdateMailboxRequest": UpdateMailboxRequest,
    "UpdateMessageRequest": UpdateMessageRequest,
    "UpdateMessageResponse": UpdateMessageResponse,
    "UpdateUserAddressRequest": UpdateUserAddressRequest,
    "UpdateUserRequest": UpdateUserRequest,
    "UploadFileResponse": UploadFileResponse,
    "UploadMessageRequest": UploadMessageRequest,
    "UploadMessageResponse": UploadMessageResponse,
    "UserLimits": UserLimits,
    "VerificationResults": VerificationResults,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
