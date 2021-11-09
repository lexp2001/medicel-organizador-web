import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Worker } from 'app/interfaces/worker.interface'

@Injectable({
    providedIn: 'root'
})

export class WorkerService {

    private _workers: Worker[]

    constructor(private _httpClient: HttpClient) {
    }

    getWorkers(): Observable<Worker[]> {
        return this._httpClient.get<Worker[]>('https://medicel.azurewebsites.net/api/getworkers').pipe(
            tap((workers) => {
                //console.info("response:", workers)
                this._workers = workers
            })
        );
    }

}
