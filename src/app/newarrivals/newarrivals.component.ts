import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { APIService } from '../Services/api.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { QuickViewComponent } from '../quick-view/quick-view.component';
@Component({
  selector: 'app-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.less']
})
export class NewarrivalsComponent {
  dataArray:Array<any>=[
   
  ]
  constructor(private data:APIService,private dialog:MatDialog)
  {
      this.data.getNewArrival().subscribe({
        next:(res)=>
        {
          this.dataArray=res
        }
      })
  }

  onView(ele:any)
  {
    this.data.id=ele
    console.log(this.data.id)
    this.data.onNew=true
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
