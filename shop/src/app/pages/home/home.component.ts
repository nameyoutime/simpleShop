import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop-model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private shopSer:ShopService) { }

  ngOnInit(): void {
  }
  onSumbit(data:Shop){
    this.shopSer.addItems(data);
    alert(`create : ${data.title}`)
  }


  check(){
    this.shopSer.getItemsData();
  }
  open(){
    console.log("test");
  }
}
