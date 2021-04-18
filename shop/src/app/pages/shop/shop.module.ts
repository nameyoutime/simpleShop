import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ItemsComponent } from './items/items.component';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [ShopComponent,ItemsComponent],
  imports: [
    MatCardModule,
    MatDialogModule,
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
