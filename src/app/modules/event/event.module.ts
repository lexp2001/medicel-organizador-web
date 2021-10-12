import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  }
];


@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatButtonToggleModule,
    CommonModule,
    MatIconModule,
    FuseCardModule ],
    
})
export class EventModule { }
