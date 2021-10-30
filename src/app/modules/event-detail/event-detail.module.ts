import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'

const routes: Routes = [
  {
    path: '',
    component: EventDetailComponent,
  }
];

@NgModule({
  declarations: [
    EventDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FuseCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class EventDetailModule { }
