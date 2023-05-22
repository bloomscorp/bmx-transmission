import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { FormPayload } from './raintree/interface/form-payload';
import { RaintreeResponse } from './raintree/interface/raintree-response';
import { TransmissionMessageService } from './transmission-message.service';
import { TransmissionPasteboxService } from './transmission-pastebox.service';

@Injectable({
    providedIn: 'root'
})
export class BmxTransmissionService {

    constructor(
		private _http: HttpClient,
		private _httpErrorHandler: HttpErrorHandlerService,
		private _pastebox: TransmissionPasteboxService
	) { }

	public executeBasicGet(
		url: string,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: string) => void,
		onSuccess: (response: string) => void,
		onFailure: (error: string) => void,
		onComplete: () => void
	): void {
		onPreExecute();

		this._http
			.get<RaintreeResponse>(url, {
				headers: headers,
			})
			.pipe(catchError(this._httpErrorHandler.intercept))
			.subscribe(
				(response: RaintreeResponse) => {
					onPostExecute(response.message);
					if (response.success) onSuccess(response.message);
					else onFailure(TransmissionMessageService.RESOURCE_VALIDATION_FAILED);
				},
				(error) => onFailure(error),
				() => onComplete()
			);
	}


	public executeGetPayload<T extends RaintreeResponse, S>(
		url: string,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: S) => void,
		onSuccess: (response: S) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
		payloadKey: string
	): void {

		onPreExecute();

		this._http
			.get<T>(url, {
				headers: headers,
			})
			.pipe(catchError(this._httpErrorHandler.intercept))
			.subscribe(
				(response: T) => {
					onPostExecute(response[payloadKey]);
					if (response.success) onSuccess(response[payloadKey]);
					else onFailure(TransmissionMessageService.RESOURCE_VALIDATION_FAILED);
				},
				(error) => onFailure(error),
				() => onComplete()
			);
	}

	public executePostPayload<T>(
		url: string,
		payload: T,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
	): void {

		onPreExecute();

		this._http.post<RaintreeResponse>(url, payload, {
			headers: headers,
		}).pipe(
			catchError(this._httpErrorHandler.intercept)
		).subscribe(
			(response: RaintreeResponse) => {
				onPostExecute(response);
				if (response.success) onSuccess(response);
				else onFailure(this._pastebox.isEmptyString(response.message) ? TransmissionMessageService.RESOURCE_VALIDATION_FAILED : response.message);
			},
			error => {
				onFailure(error);
				onComplete();
			},
			() => onComplete()
		);
	}


    public executePatchPayload<T>(
		url: string,
		payload: T,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
	): void {

		onPreExecute();

		this._http.patch<RaintreeResponse>(url, payload, {
			headers: headers,
		}).pipe(
			catchError(this._httpErrorHandler.intercept)
		).subscribe(
			(response: RaintreeResponse) => {
				onPostExecute(response);
				if (response.success) onSuccess(response);
				else onFailure(this._pastebox.isEmptyString(response.message) ? TransmissionMessageService.RESOURCE_VALIDATION_FAILED : response.message);
			},
			error => {
				onFailure(error);
				onComplete();
			},
			() => onComplete()
		);
	}


	public executeFormPostPayload<T extends FormPayload>(
		url: string,
		payload: T,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void
	): void {

		onPreExecute();

		const formData: FormData = new FormData();

		Object.keys(payload).forEach((key) => {
			
			if (payload[key] === null || payload[key] === undefined) return;

			if (Array.isArray(payload[key])) {
				payload[key].forEach((item: number | string | File) => {
					if (item === null || item === undefined) return;
					formData.append(key, JSON.stringify(item));
				})

				return;
			}
			
			formData.append(key, payload[key])
		});

		this._http.post<RaintreeResponse>(url, formData, {
			headers: headers,
		}).pipe(
			catchError(this._httpErrorHandler.intercept)
		).subscribe(
			(response: RaintreeResponse) => {
				onPostExecute(response);
				if (response.success) onSuccess(response);
				else onFailure(this._pastebox.isEmptyString(response.message) ? TransmissionMessageService.RESOURCE_VALIDATION_FAILED : response.message);
			},
			error => {
				onFailure(error);
				onComplete();
			},
			() => onComplete()
		);
	}

    public executeFormPatchPayload<T extends FormPayload>(
		url: string,
		payload: T,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void
	): void {

		onPreExecute();

		const formData: FormData = new FormData();

		Object.keys(payload).forEach((key) => {
			
			if (payload[key] === null || payload[key] === undefined) return;

			if (Array.isArray(payload[key])) {
				payload[key].forEach((item: number | string | File) => {
					if (item === null || item === undefined) return;
					formData.append(key, JSON.stringify(item));
				})

				return;
			}
			
			formData.append(key, payload[key])
		});

		this._http.patch<RaintreeResponse>(url, formData, {
			headers: headers,
		}).pipe(
			catchError(this._httpErrorHandler.intercept)
		).subscribe(
			(response: RaintreeResponse) => {
				onPostExecute(response);
				if (response.success) onSuccess(response);
				else onFailure(this._pastebox.isEmptyString(response.message) ? TransmissionMessageService.RESOURCE_VALIDATION_FAILED : response.message);
			},
			error => {
				onFailure(error);
				onComplete();
			},
			() => onComplete()
		);
	}

    public executeDeletePayload(
		url: string,
		headers: HttpHeaders | undefined,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
	): void {

		onPreExecute();

		this._http.delete<RaintreeResponse>(url, {
			headers: headers,
		}).pipe(
			catchError(this._httpErrorHandler.intercept)
		).subscribe(
			(response: RaintreeResponse) => {
				onPostExecute(response);
				if (response.success) onSuccess(response);
				else onFailure(this._pastebox.isEmptyString(response.message) ? TransmissionMessageService.RESOURCE_VALIDATION_FAILED : response.message);
			},
			error => {
				onFailure(error);
				onComplete();
			},
			() => onComplete()
		);
	}
}
