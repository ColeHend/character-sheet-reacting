import { Observable } from 'rxjs';
export class HttpClient {
    get<T>(url: string): Observable<T> {
        return new Observable<T>((observer) => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    observer.next(data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }

    post<T>(url: string, body: any): Observable<T> {
        return new Observable<T>((observer) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then((response) => response.json())
                .then((data) => {
                    observer.next(data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }
}
