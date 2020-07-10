import { HttpClient } from '@angular/common/http';


export class BaseHttp {

    constructor(
        public http: HttpClient
    ) { }

    get(url: string, success?: (result: any) => void) {
        if (!success) {
            return this.http.get(url);
        } else {
            this.http.get(url).subscribe(response => {
                success(response);
            });
        }
    }

    async getAsync(url: string, success?: (result) => void) {
        if (!success) {
            return await this.http.get(url);
        } else {
            await this.http.get(url).subscribe(response => {
                success(response);
            });
        }
    }

    post<T>(url: string, item: T, success: (result) => void) {
        this.http.post(url, item).subscribe(response => {
            success(response);
        });
    }

    patch<T>(url: string, item: T, success: (result) => void) {
        this.http.patch(url, item).subscribe(response => {
            success(response);
        });
    }

    put<T>(url: string, item: T, success: (result) => void) {
        this.http.put(url, item).subscribe(response => {
            success(response);
        });
    }

    delete<T>(url: string, item: T, success: (result) => void) {
        this.http.delete(url, item).subscribe(response => {
            success(response);
        });
    }
}
