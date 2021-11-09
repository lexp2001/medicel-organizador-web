import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail/event-detail.component'
import { EventEditComponent } from './event-edit/event-edit.component'
import { RouterModule, Routes } from '@angular/router';

import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from 'app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EventComponent,
      },
      {
        path: 'detail/:id',
        component: EventDetailComponent,
      },
      {
        path: 'edit/:id',
        component: EventEditComponent,
      },
      {
        path: 'edit',
        component: EventEditComponent,
      }
    ]
  }
];


@NgModule({
  declarations: [
    EventComponent,
    EventDetailComponent,
    EventEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatButtonToggleModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    SharedModule,
    FuseCardModule],

})
export class EventModule { }
