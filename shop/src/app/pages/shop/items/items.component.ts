import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public shopSer: ShopService, public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }
  delete(id) {
    this.shopSer.deleteItem(id);
  }

  openEdit(data) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: data
    });

  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  public title: string;
  public price: string;
  public stock: number;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,private shopSer:ShopService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeTitle(value: string) {
    this.data.title = value;
  }
  changePrice(value: string) {
    this.data.price = value;
  }
  changeStock(value: number) {
    this.data.stock = value;
  }

  UpdateContent() {
    let newData = {
      id : this.data.id,
      title:this.data.title,
      price:this.data.price,
      stock:this.data.stock
    }
    this.shopSer.updateItem(newData);
    this.dialogRef.close();
  }

}