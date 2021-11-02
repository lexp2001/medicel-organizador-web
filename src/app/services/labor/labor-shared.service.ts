import { Injectable } from '@angular/core';
import {  Labor } from '../../interfaces/labor.interface'

@Injectable({
  providedIn: 'root'
})
export class LaborSharedService {

  private _labors: Labor[]

  get labors() {
    return this._labors
  }

  set labors(data: Labor[]) {
    this._labors = data
  }



}

