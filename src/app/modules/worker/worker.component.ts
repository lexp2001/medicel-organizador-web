import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12345678945, name: 'Leonardo Castillo', weight: '07/06/1964', symbol: '9 01 342334234'},
  {position: 2456+789764, name: 'Carlos Manuel Zapata', weight: '15/01/1996', symbol: '9 02 45654645'},
  {position: 32149875467, name: 'Melitza Castillo', weight: '21/01/1981', symbol: '9 03 23443454'},
  {position: 44547654557, name: 'Francisco Uzcátegui', weight: '29/08/1992', symbol: '9 04 56553455'},
  {position: 37845678978, name: 'Joao dos Santos', weight: '21/12/1994', symbol: '9 05 546546487'},
  {position: 47894654878, name: 'Juan Carlos García', weight: '29/01/1997', symbol: '9 12 456789789'},
];



@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'go'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        console.info(file.name)

        readXlsxFile(file).then((rows) => {
          // `rows` is an array of rows
          // each row being an array of cells.
          console.info(rows)
        })
      

        
    }
}


  ngOnInit(): void {
  }

}
