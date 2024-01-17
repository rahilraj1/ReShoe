import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { APIService } from '../Services/api.service';
import { QuickViewComponent } from '../quick-view/quick-view.component';
@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.less']
})
export class BestsellerComponent {
  dataArray:Array<any>=[]
  testing:Array<any>=[]
  constructor(private data:APIService, private dialog:MatDialog)
  {
    this.data.getBestSeller().subscribe({
      next:(res)=>
      {
         this.dataArray=res
      },
      error:()=>
      {
         console.log('Nope')
      }
    })
  }

  onView(ele:any)
  {
    this.data.id=ele
    console.log(this.data.id)
    this.data.onBest=true;
    const dialogRef = this.dialog.open(QuickViewComponent,{
      width:'70%',
      height:'70%',
      position:{
        top:'6%',
        left:'15%'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   }
  }
