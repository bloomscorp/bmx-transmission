import { Injectable } from '@angular/core';
import { FormPayload } from './raintree/interface/form-payload';

@Injectable({
    providedIn: 'root'
})
export class FormDataProcessService {

    constructor() { }

    isObject = (obj: any) => obj === Object(obj);

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
            else if (payload[key] instanceof File) {
                formData.append(key, payload[key]);
            }
            else if (Array.isArray(payload[key])) {
                payload[key].forEach((item: any, index: number) => {
                    if (item === null || item === undefined) return;
                    else if (item instanceof File) {
                        formData.append(key, payload[key]);
                    }
                    else if (
                        !Array.isArray(item) &&
                        this.isObject(item) &&
                        Object.keys(item).length > 0
                    ) {
                        Object.keys(item).forEach((innerKey) => {
                            formData.append(
                                `${key}[${index}].${innerKey}`,
                                JSON.stringify(item[innerKey])
                            );
                        });
                    }
                    else if (Array.isArray(item)) {
                        item.forEach((innerItem: any, innderIndex: number) => {
                            formData.append(
                                `${key}[${index}][${innderIndex}]`,
                                JSON.stringify(item[innerItem])
                            );
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
                        JSON.stringify(payload[key][innerKey])
                    );
                });
            }
            else {
                formData.append(key, payload[key]);
            }

            formData.append(key, payload[key]);
        });

        return formData;
    }

}
