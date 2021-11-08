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
  })
  currentIndex: number

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
    if (this.currentIndex) {
      this._laborService.update(this.faenasGroup.value).
      subscribe(data=>{
        console.info(data)
        this.laborData = data
        this.labors.labors[this.currentIndex] = this.faenasGroup.value
        //this.faenasGroup.setValue(this.laborData)
      })
    } else {
      this._laborService.create(this.faenasGroup.value).
      subscribe(data=>{
        console.info(data)
        this.laborData = data
        this.labors.labors[this.currentIndex] = this.faenasGroup.value
        //this.faenasGroup.setValue(this.laborData)
      })
    }
    
  }
  back(): void {
    this.location.back()
  }

  ngOnInit(): void {


    this.labors = this._laborSharedService
    this.currentIndex = this.activatedRoute.snapshot.params.id
    console.log(this.currentIndex)

    if (!this.labors || !this.labors.labors) {
      this._router.navigate(['/events']);
    }

    if (!this.currentIndex) {
      this.faenasGroup.setValue(
        {
          _id: null,
          city: "",
          client:  "",
          country:"",
          address: "",
          dateCreation:  "",
          description:  "",
          img:  "",
          name:  "",
          organization: "sigdokoppers",
          status: true,
          type: ""
        }
      )
    } else {

    console.info(this.labors.labors[this.currentIndex])
    this.faenasGroup.setValue(this.labors.labors[this.currentIndex])}
    

  }

}
