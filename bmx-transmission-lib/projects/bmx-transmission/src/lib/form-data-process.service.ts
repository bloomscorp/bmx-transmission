import { Injectable } from '@angular/core';
import { FormPayload } from './raintree/interface/form-payload';

@Injectable({
    providedIn: 'root'
})
export class FormDataProcessService {

    constructor() { }

    isObject = (obj: any) => obj === Object(obj);

    isFile(input: any) {
        if ('File' in window && input instanceof File)
            return true;
        else return false;
    }

    isBlob(input: any) {
        if ('Blob' in window && input instanceof Blob)
            return true;
        else return false;
    }

    public singleLevelProcess<T extends FormPayload>(payload: T): FormData {

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

        return formData;

    }

    public multiLevelProcess<T extends FormPayload>(payload: T): FormData {

		const formData = new FormData();

		Object.keys(payload).forEach((key) => {
			if (payload[key] === null || payload[key] === undefined) return;
			else if (this.isBlob(payload[key]) || this.isFile(payload[key])) {
				formData.append(key, payload[key]);
			}
			else if (Array.isArray(payload[key])) {
				payload[key].forEach((item: any, index: number) => {
					if (item === null || item === undefined) return;
					else if (this.isBlob(item) || this.isFile(item)) {
						formData.append(key, item);
					}
					else if (
						!Array.isArray(item) &&
						this.isObject(item) &&
						Object.keys(item).length > 0
					) {
						Object.keys(item).forEach((innerKey) => {
							if (this.isBlob(item[innerKey]) || this.isFile(item[innerKey])) {
								formData.append(
									`${key}[${index}].${innerKey}`,
									item[innerKey]
								);
							} else {
								formData.append(
									`${key}[${index}].${innerKey}`,
									item[innerKey]
								);
							}
						});
					}
					else if (Array.isArray(item)) {
						item.forEach((innerItem: any, innderIndex: number) => {
							if (this.isBlob(innerItem) || this.isFile(innerItem)) {
								formData.append(
									`${key}[${index}][${innderIndex}]`,
									innerItem
								);
							} else {
								formData.append(
									`${key}[${index}][${innderIndex}]`,
									innerItem
								);
							}
						});
					}
					else {
						formData.append(key, JSON.stringify(item));
					}
				});
			}
			else if (
				!Array.isArray(payload[key]) &&
				this.isObject(payload[key]) &&
				Object.keys(payload[key]).length > 0
			) {
				Object.keys(payload[key]).forEach((innerKey) => {
					formData.append(
						`${key}.${innerKey}`,
						payload[key][innerKey]
					);
				});
			}
			else {
				formData.append(key, payload[key]);
			}
		});

		return formData;
	}

}
