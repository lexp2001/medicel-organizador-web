import { Component, OnInit } from '@angular/core';
import { LaborService } from 'app/services/labor/labor.service'
import { Labor } from 'app/interfaces/labor.interface'

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.scss'],
  providers: [LaborService]
})
export class WorkerEditComponent implements OnInit {

  constructor( private _laborService: LaborService) { }

  ngOnInit(): void {
  }

}
