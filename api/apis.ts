export * from './addressesApi';
import { AddressesApi } from './addressesApi';
export * from './applicationPasswordsApi';
import { ApplicationPasswordsApi } from './applicationPasswordsApi';
export * from './archiveApi';
import { ArchiveApi } from './archiveApi';
export * from './auditApi';
import { AuditApi } from './auditApi';
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './autorepliesApi';
import { AutorepliesApi } from './autorepliesApi';
export * from './dKIMApi';
import { DKIMApi } from './dKIMApi';
export * from './domainAccessApi';
import { DomainAccessApi } from './domainAccessApi';
export * from './domainAliasesApi';
import { DomainAliasesApi } from './domainAliasesApi';
export * from './filtersApi';
import { FiltersApi } from './filtersApi';
export * from './mailboxesApi';
import { MailboxesApi } from './mailboxesApi';
export * from './messagesApi';
import { MessagesApi } from './messagesApi';
export * from './storageApi';
import { StorageApi } from './storageApi';
export * from './submissionApi';
import { SubmissionApi } from './submissionApi';
export * from './twoFactorAuthApi';
import { TwoFactorAuthApi } from './twoFactorAuthApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AddressesApi, ApplicationPasswordsApi, ArchiveApi, AuditApi, AuthenticationApi, AutorepliesApi, DKIMApi, DomainAccessApi, DomainAliasesApi, FiltersApi, MailboxesApi, MessagesApi, StorageApi, SubmissionApi, TwoFactorAuthApi, UsersApi, WebhooksApi];
