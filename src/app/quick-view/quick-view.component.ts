import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';
import {HttpClient} from '@angular/common/http'
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { NgxUiLoaderComponent, NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.less']
})
export class QuickViewComponent {
   id=1;
   img=''
   name=""
   price=0
   gender=""
   desc=""
   cate=""
   quantity=1
   isCheck:boolean=false;
   isAdded:boolean=false;
   cartData=
    {
      "id":0,
      "imgUrl":"",
      "name":"",
      "gender":"",
      "category":"",
      "description":"",
      "price":0
    }
constructor(private data:APIService, private http:HttpClient,public dialog:MatDialog, private ngxService:NgxUiLoaderService)
    {
      this.id=data.id
      console.log(this.id)
      if(this.data.onNew==true)
      {
        console.log('calling onNEw')
        this.data.getNewArrival().subscribe({
          next:(resp)=>
          {
              for(let ele of resp)
              {
                 if(ele.id==this.id)
                 {
                    this.img=ele.imgUrl;
                    this.name=ele.name;
                    this.price=ele.price;
                    this.gender=ele.gender;
                    this.desc=ele.description;
                    this.cate=ele.category
                 }
              }
          }
        })
        this.data.onNew=false;
      }
      else
      {
        this.data.getBestSeller().subscribe({
          next:(resp)=>
          {
              for(let ele of resp)
              {
                 if(ele.id==this.id)
                 {
                    this.img=ele.imgUrl;
                    this.name=ele.name;
                    this.price=ele.price;
                    this.gender=ele.gender;
                    this.desc=ele.description;
                    this.cate=ele.category
                 }
              }
          }
        })
        this.data.onBest=false
      }
    }
    onMinus()
    {
       if(this.quantity>=0)
       {
        this.quantity-=1;
       }
    }
    onPlus()
    {
        this.quantity+=1;
    }
    onCart()
    {
        this.data.cartId=this.id
        this.cartData.id=this.id
        this.cartData.imgUrl=this.img
        this.cartData.name=this.name
        this.cartData.gender=this.gender
        this.cartData.category=this.cate
        this.cartData.description=this.desc
        this.cartData.price=this.price
        this.ngxService.start()
        this.data.addCart(this.cartData).subscribe({
          next:(resp)=>
          {
             console.log('Added To Cart Successfully')
             this.isCheck=true;
          },
          error:()=>
          {
            console.log("Error Found")
            this.isAdded=true;
          }
        });
        this.ngxService.stop()
    }
    openCart()
    {
      const dialogRef = this.dialog.open(CartComponent,{
        width:'40%',
        height:'100%',
        position:{
          top:'0',
          right:'0'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
