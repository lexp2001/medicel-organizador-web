import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Labor } from 'app/interfaces/labor.interface'
import { Worker } from 'app/interfaces/worker.interface'

@Injectable({
    providedIn: 'root'
})

export class LaborService {

    private _labor: ReplaySubject<Labor> = new ReplaySubject<Labor>(1);
    private _labors: Labor[]
    private _workers: Worker[]

    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for labor
     *
     * @param value
     */
    set labor(value: Labor) {
        // Store the value
        this._labor.next(value);
    }

    get labor$(): Observable<Labor> {
        return this._labor.asObservable();
    }

    /**
     * Setter & getter for labors
     *
     * @param value
     */

    get labors(): Labor[] {
        return this._labors
    }


    set labors(value: Labor[]) {
        // Store the value
        this._labors = value;
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current labor data
     */
    get(): Observable<Labor> {
        return this._httpClient.get<Labor>('https://medicel.azurewebsites.net/api/getlabors').pipe(
            tap((labor) => {
                console.info("response:", labor)
                this._labor.next(labor);
            })
        );
    }

    /**
     * Get the current labor data
     */
    getLabors(): Observable<Labor[]> {
        return this._httpClient.get<Labor[]>('https://medicel.azurewebsites.net/api/getlabors').pipe(
            tap((labors) => {
                console.info("response:", labors)
                this._labors = labors
                //this._labor.next(labor);
            })
        );
    }

    getWorkers(): Observable<Worker[]> {
        return this._httpClient.get<Worker[]>('https://medicel.azurewebsites.net/api/getworkers').pipe(
            tap((workers) => {
                console.info("response:", workers)
                this._workers = workers
                //this._labor.next(labor);
            })
        );
    }

    /**
     * 
     * Update the labor
     *
     * @param labor
     */
    update(labor: Labor): Observable<any> {
        console.info(labor)
        console.info('https://medicel.azurewebsites.net/api/UpdateLaborById/' + labor._id)
        return this._httpClient.put<Labor>('https://medicel.azurewebsites.net/api/UpdateLaborById/' + labor._id, labor).pipe(
            map((response) => {
                console.info(response)
                return response["value"]

            })
        );
    }

    /**
     * Update the labor
     *
     * @param labor
     */
    create(labor: Labor): Observable<any> {
        delete labor._id
        console.info(labor)
        console.info('https://medicel.azurewebsites.net/api/CreateLabor')
        return this._httpClient.post<Labor>('https://medicel.azurewebsites.net/api/CreateLabor', labor).pipe(
            map((response) => {
                console.info(response)
                return response["value"]

            })
        );
    }


    uploadSchedules(schedule: any): Observable<any> {
        console.info(schedule)
        return this._httpClient.post<Labor>('https://medicel.azurewebsites.net/api/CreateLaborTest', schedule).pipe(
            map((response) => {
                console.info(response)
                return response

            })
        );
    }

    getSchedules(): Observable<Labor[]> {
        return this._httpClient.get<Labor[]>('https://medicel.azurewebsites.net/api/GetLaborTests').pipe(
            tap((labors) => {
                console.info("response:", labors)
                this._labors = labors
                //this._labor.next(labor);
            })
        );
    }

    

}
