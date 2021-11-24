import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [MatSort]
})
export class DataTableModule { }
