import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { LaborService } from 'app/services/labor/labor.service'
import { LaborSharedService } from 'app/services/labor/labor-shared.service'
import { Labor } from 'app/interfaces/labor.interface'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [LaborService]
})
export class EventComponent implements OnInit {

  @ViewChildren(FuseCardComponent, { read: ElementRef }) private _fuseCards: QueryList<ElementRef>;

  labors: LaborSharedService
  laborData: Labor[]
  showProgressBar: boolean

  constructor(private _laborService: LaborService,
              private _laborSharedService: LaborSharedService) { }

  ngOnInit(): void {
    this.labors = this._laborSharedService
    console.info("_laborSharedService", this._laborSharedService)

    if (!this._laborSharedService.labors) {
      this.showProgressBar = true
      this._laborService.getLabors().
        subscribe(data => {
          console.info(data)
          this.laborData = data
          this.labors.labors = data
          this.showProgressBar = false
        })
    } else {
      this.laborData = this.labors.labors
    }



  }

}
