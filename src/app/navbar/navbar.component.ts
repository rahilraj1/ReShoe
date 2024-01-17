import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { APIService } from '../Services/api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  cnt=0;
  isMenu:boolean=false;
   constructor(public dialog:MatDialog, private data:APIService)
   {
      this.cnt=data.cartCnt;
      console.log(this.data.cartCnt,"Doing first")
   }
   onCart()
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
   onCnt()
   {
          this.cnt=this.data.cartCnt;
          console.log('navbar called')
          console.log(this.data.cartCnt)
   }
   onMenu()
   {
      this.isMenu=!this.isMenu;
   }
}
