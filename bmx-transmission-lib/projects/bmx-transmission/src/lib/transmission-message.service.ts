import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TransmissionMessageService {

    public static readonly GENERIC_FAILURE: string = 'Something went wrong!';
	public static readonly GENERIC_FAILURE_REQUEST_INCOMPLETE: string = 'Something went wrong. We could not complete the request.';
	public static readonly EXPIRED_TOKEN_RECEIVED: string = 'An expired session was received. You may need to login again.';
	public static readonly RESOURCE_VALIDATION_FAILED: string = 'We could not validate your authority to access resources.';
	public static readonly LOGIN_REQUEST: string = 'You need to login or sign up with us!';
	public static readonly LOGIN_SUCCESSFUL: string = 'Logged in successfully!';
	public static readonly INVALID_CREDENTIALS: string = 'Please provide valid login credentials.';
	public static readonly INVALID_FORM_FIELDS: string = 'Some of the form fields seem to be invalid.';
	public static readonly SIGNUP_SUCCESSFUL: string = 'You have successfully signed up with us! Please wait as we log you in.';
	public static readonly LOGIN_WAIT: string = 'Please wait as we log you in.';
	public static readonly AUTHORIZING: string = 'Authorizing, please wait';
	public static readonly LOGOUT_REQUEST: string = 'Do you really want to logout?';
	public static readonly LOGOUT_SUCCESSFUL: string = 'Logged out successfully!';

    constructor() { }
}
