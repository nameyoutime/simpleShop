import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private shopSer:ShopService) { }

  ngOnInit(): void {
  }

  check(){
    console.log(this.shopSer.getShop);
  }

}
