import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { LaborService } from 'app/services/labor/labor.service'
import { Labor } from 'app/interfaces/labor.types'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [LaborService]
})
export class EventComponent implements OnInit {

  @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fuseCards: QueryList<ElementRef>;

  laborData: Labor

  constructor( private _laborService: LaborService) { }
  ngOnInit(): void {
    
    this._laborService.get().
      subscribe(data => {
        console.info(data)
        this.laborData = data
      })

    
  }

}
