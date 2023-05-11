import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TransmissionConstantService {


    public static readonly MOBILE_NUMBER_PATTERN: RegExp = /^[0-9]{6,20}$/;
    public static readonly ZIP_CODE_PATTERN: RegExp = /^[0-9]{1,20}$/;
    public static readonly COULD_NOT_CONNECT_TO_SERVER_ERROR: string = 'could not connect to our servers';
    public static readonly WORKING: string = 'working';
    public static readonly CONFIRM: string = 'Please confirm your choice.';

    /* JWT CONSTANTS */

    public static readonly AUTHORIZATION_HEADER: string = 'Authorization';
    public static readonly CONTENT_TYPE_HEADER: string = 'Content-Type';
    public static readonly AUTHORIZATION_SCHEME: string = 'Bearer ';
    public static readonly EXPIRED_TOKEN: string = 'expired-token';
    public static readonly DOMAIN_NOT_ALLOWED: string = 'domain-not-allowed';
    public static readonly NO_JWT_TOKEN: string = 'no-jwt-token';

    private constructor() { }
}
