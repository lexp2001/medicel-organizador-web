import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
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


import { WorkerComponent } from './worker.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WorkerComponent
      },
      {
        path: 'worker',
        component: WorkerEditComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    WorkerComponent,
    WorkerEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    SharedModule,
    FuseCardModule
  ]
})
export class WorkerModule { }
