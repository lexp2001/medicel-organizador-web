import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fuseCards: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

}
