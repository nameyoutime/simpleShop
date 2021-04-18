import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    MatCardModule,
    MatTabsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
