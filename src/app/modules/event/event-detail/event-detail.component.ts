import { Component, OnInit } from '@angular/core';
import { LaborSharedService } from 'app/services/labor/labor-shared.service'

import { Labor } from 'app/interfaces/labor.interface'

import { Router, ActivatedRoute } from '@angular/router'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Clinica de Test - Santiago', weight: '07/10/2021', symbol: 'PCR' },
  { position: 2, name: 'Laboratorio XX - Santiago', weight: '15/10/2021', symbol: 'PCR' },
  { position: 3, name: 'Centro Clínico Z - Santiago', weight: '21/10/2021', symbol: 'PCR' },
  { position: 4, name: 'Clinica de Test - Santiago', weight: '29/10/2021', symbol: 'PCR' },
];


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']})
export class EventDetailComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'go'];
  dataSource = ELEMENT_DATA;

  labors: LaborSharedService
  laborData: Labor
  currentIndex: number

  constructor(
    private _laborSharedService: LaborSharedService,
    private activatedRoute: ActivatedRoute,
    private _router: Router

  ) { }

  ngOnInit(): void {
    this.labors = this._laborSharedService
    this.currentIndex = this.activatedRoute.snapshot.params.id
    console.log(this.currentIndex)

    if (!this.labors || !this.labors.labors) {
      this._router.navigate(['/events']);
    }
    
    console.info(this.labors.labors[this.currentIndex])
  }



}
