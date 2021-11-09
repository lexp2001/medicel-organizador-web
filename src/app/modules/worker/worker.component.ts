import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'app/services/worker.service'
import { Worker } from 'app/interfaces/worker.interface'
import { LaborSharedService } from 'app/services/labor/labor-shared.service'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 12345678945, name: 'Leonardo Castillo', weight: '07/06/1964', symbol: '9 01 342334234' },
//   { position: 2456 + 789764, name: 'Carlos Manuel Zapata', weight: '15/01/1996', symbol: '9 02 45654645' },
//   { position: 32149875467, name: 'Melitza Castillo', weight: '21/01/1981', symbol: '9 03 23443454' },
//   { position: 44547654557, name: 'Francisco Uzcátegui', weight: '29/08/1992', symbol: '9 04 56553455' },
//   { position: 37845678978, name: 'Joao dos Santos', weight: '21/12/1994', symbol: '9 05 546546487' },
//   { position: 47894654878, name: 'Juan Carlos García', weight: '29/01/1997', symbol: '9 12 456789789' },
// ];

// const ELEMENT_DATA: Worker[] = [
//   { name: 'Leonardo Castillo', rut: 12345678945, email: '9 01 342334234', phone: "12345678945" },
//   { name: 'Carlos Manuel Zapata', rut: 24567897641, email: '15/01/1996', phone: '9 02 45654645' },
//   { name: 'Melitza Castillo', rut: 32149875467, email: '21/01/1981', phone: '9 03 23443454', },
// ];

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  laborSharedService: LaborSharedService

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'go'];
  displayedColumns: string[] = ['name', 'rut', 'email', 'phone', 'go'];

  public workerList = []
  public companyList = []

  //dataSource = ELEMENT_DATA;
  dataSource: Worker[]

  constructor(
    private workerService: WorkerService,
    private _laborSharedService: LaborSharedService
  ) { }

  getWorkers() {
    this.workerService.getWorkers()
      .subscribe(data => {
        console.log(data)
        this.dataSource = data
      })
  }

  ngOnInit(): void {
    this.laborSharedService = this._laborSharedService
    console.log(this.laborSharedService.labors)
    this.getWorkers()
  }

}