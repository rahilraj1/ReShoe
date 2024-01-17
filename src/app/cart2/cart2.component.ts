import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.less']
})
export class Cart2Component {
  totalBill=0;
  cnt=1
  dataArray:Array<any>=[]
    constructor(private data:APIService)
    {
         this.data.getCartData().subscribe({
          next:(resp)=>
          {
             this.dataArray=resp
             for(let ele of this.dataArray)
             {
               this.totalBill+=ele.price*this.cnt
               this.totalBill=Math.ceil(this.totalBill)
             }
          },
          error:()=>
          {
              console.log('Getting Error While Fetching Data In Cart2')
          }
         })
    }

    onClose(key:any)
    {
        this.data.deleteCartData(key).subscribe({
          next:(resp)=>
          {
             console.log('Deleted Successfully')
             window.location.reload();
          },
          error:()=>
          {
             console.log('Error Occured While Deleting Data')
          }
        })
    }
    onMinus(p:any)
    {
    }
    onPlus(p:any)
    {
      
    }
}
