import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { LaborService } from 'app/services/labor/labor.service'
import { Labor } from 'app/interfaces/labor.interface'
import { LaborSharedService } from 'app/services/labor/labor-shared.service'
import { FormControl, FormGroup } from '@angular/forms';

import { Location } from '@angular/common'

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
  providers: [LaborService]
})
export class EventEditComponent implements OnInit {

  labors: LaborSharedService
  laborData: Labor
  faenasGroup = new FormGroup({
    city: new FormControl(),
    client: new FormControl(),
    country: new FormControl(),
    address: new FormControl(),
    dateCreation: new FormControl(),
    description: new FormControl(),
    img: new FormControl(),
    name: new FormControl(),
    organization: new FormControl(),
    status: new FormControl(),
    type: new FormControl(),
    _id: new FormControl(),
  });

  constructor(
    private _laborService: LaborService,
    private _laborSharedService: LaborSharedService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private _router: Router

  ) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.faenasGroup.value);
  }
  back(): void {
    this.location.back()
  }

  ngOnInit(): void {


    this.labors = this._laborSharedService
    let id = this.activatedRoute.snapshot.params.id
    console.log(id)

    if (this.labors && this.labors.labors) {
      this.laborData = this.labors.labors.filter(labor => {
        return labor._id == id
      })[0]
    } else {
      this._router.navigate(['/events']);
    }

    // this.faenasGroup.setValue({
    //   name: this.laborData.name,
    //   status: this.laborData.status
    // })
    this.faenasGroup.setValue(this.laborData)
    console.info(this.laborData)

  }

}
