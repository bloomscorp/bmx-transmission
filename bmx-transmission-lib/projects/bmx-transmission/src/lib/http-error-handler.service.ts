import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TransmissionConstantService } from './transmission-constant.service';

@Injectable({
	providedIn: 'root',
})
export class HttpErrorHandlerService {
	
    constructor() {}

	private static prepareErrorMessage(error: HttpErrorResponse): string {
        // TODO: Add proper error handling
		// if (!ConfigurationService.PRODUCTION) console.trace();

		let errorMessage: string;

		if (error.error instanceof ErrorEvent)
			errorMessage = error.error.message;
		else if (error.status === 0)
			errorMessage = TransmissionConstantService.COULD_NOT_CONNECT_TO_SERVER_ERROR;
		else errorMessage = error.error.message;

		return errorMessage;
	}

	public intercept(error: HttpErrorResponse): Observable<any> {
        debugger;
		return throwError(HttpErrorHandlerService.prepareErrorMessage(error));
	}
}
