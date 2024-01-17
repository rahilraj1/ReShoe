import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class APIService {
  id=1;
  cartId=0;
  cartCnt=0;
  onNew:boolean=false;
  onBest:boolean=false
  constructor(private http:HttpClient) 
  {
      this.http.get<any>("http://localhost:3000/cart").subscribe({
         next:(resp)=>
         {
            for(let ele of resp)
            {
              console.log(ele)
              this.cartCnt=this.cartCnt+1;
            }

            console.log(this.cartCnt)
         }
      })
  }
  getBestSeller()
  {
    return  this.http.get<any>('http://localhost:3000/bestSeller')
  }
  getNewArrival()
  {
    return this.http.get<any>('http://localhost:3000/newArrival')
  }
  addCart(data:any)
  {
    return this.http.post<any>("http://localhost:3000/cart",data)
  }
  getCartData()
  {
     return this.http.get<any>("http://localhost:3000/cart")
  }
  deleteCartData(id:any)
  {
      console.log(`deleted: ${id}`)
      return this.http.delete<any>("http://localhost:3000/cart/"+id) 
  }
  updateCartData(id:any)
  {
     return this.http.put<any>("http://localhost:3000/cart/",id)
  }
  addMsg(data:any)
  {
      return this.http.post<any>("http://localhost:3000/messages",data)
  }
}
