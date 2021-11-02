import { Component, OnInit } from '@angular/core';
import { LaborService } from 'app/services/labor/labor.service'
import { Labor } from 'app/interfaces/labor.interface'

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
  providers: [LaborService]
})
export class EventEditComponent implements OnInit {

  constructor( private _laborService: LaborService) { }

  ngOnInit(): void {
  }

}
