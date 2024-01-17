import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {
  quantity = 1;
  totalBill = 0;
  cartData: Array<any> = []
  isEmpty: boolean = true;
  constructor(private data: APIService,public dialog:MatDialog,private ngxService:NgxUiLoaderService) {
    this.data.getCartData().subscribe({
      next: (resp) => {
        this.cartData = resp;
        this.data.cartCnt=this.cartData.length;
        console.log("Doing",this.data.cartCnt)
        if (this.cartData.length > 0) {
          this.isEmpty = false;
        }
        for(let ele of this.cartData)
        {
           this.totalBill=this.totalBill+ele.price;
        }
      },
      error: () => {
        console.log('Error Found While Fetching')
      }
    })
    }
  
  onMinus() { }
  onPlus() { }
  onCross(){}
  onCancel(iid:any)
  {
      this.ngxService.start()
      this.data.deleteCartData(iid).subscribe({
        next:(resp)=>
        {
            console.log("Deleted successfully")
            window.location.reload()
        },
        error:()=>
        {
          console.log('Error Found While Deleted')
        }
      })
      this.ngxService.stop()
  }
}

