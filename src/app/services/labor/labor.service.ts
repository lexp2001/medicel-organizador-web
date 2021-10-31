import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Labor } from 'app/interfaces/labor.types'

@Injectable({
    providedIn: 'root'
})
export class LaborService
{
    private _labor: ReplaySubject<Labor> = new ReplaySubject<Labor>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for labor
     *
     * @param value
     */
    set labor(value: Labor)
    {
        // Store the value
        this._labor.next(value);
    }

    get labor$(): Observable<Labor>
    {
        return this._labor.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current labor data
     */
    get(): Observable<Labor>
    {
        return this._httpClient.get<Labor>('https://medicel.azurewebsites.net/api/getlabors').pipe(
            tap((labor) => {
                this._labor.next(labor);
            })
        );
    }

    /**
     * Update the labor
     *
     * @param labor
     */
    update(labor: Labor): Observable<any>
    {
        return this._httpClient.patch<Labor>('api/common/labor', {labor}).pipe(
            map((response) => {
                this._labor.next(response);
            })
        );
    }
}
