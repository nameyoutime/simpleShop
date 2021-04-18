import { Injectable } from '@angular/core';
import { Shop } from '../models/shop-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private shop: Shop;
  constructor(private http: HttpClient) {
    this.getItemsData();
  }

  async addItems(data: Shop) {
    await this.http.post(environment.endpoint + "shop-create", data).toPromise();
  }

  get getShop() {
    return this.shop;
  }

  async getItemsData() {
    let data;
    data = await this.http.get(environment.endpoint + "items").toPromise();
    this.shop = data;
  }

  async deleteItem(id) {
    let urlDel = `${environment.endpoint}item-delete?id=${id}`;
    await this.http.delete(urlDel).toPromise();
    this.getItemsData();
  }
  async updateItem(item) {
    await this.http.put(environment.endpoint + "item-update", item).toPromise();
    this.getItemsData();
  }



}
