import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';
import { MatDialog} from '@angular/material/dialog';
import { QuickViewComponent } from '../quick-view/quick-view.component';
@Component({
  selector: 'app-men-component',
  templateUrl: './men-component.component.html',
  styleUrls: ['./men-component.component.less']
})
export class MenComponentComponent 
{
    dataArray3:Array<any>=[];
    selected=''
    isFiltered=false;
    ch='M'
    numberData:number=0;
    constructor(private data:APIService,private dailog:MatDialog)
    {
        this.data.getBestSeller().subscribe({
          next:(resp)=>
          {
             this.dataArray3=resp;
          },
          error:()=>
          {
             console.log('Error Occured While Fetching Data In Men Section')
          }
        })
        this.data.getNewArrival().subscribe({
          next:(resp)=>
          {
             this.dataArray3.push(...resp);
             this.dataArray3=this.dataArray3.filter((ele)=>
             {
                return this.ch==ele.gender.charAt(0)
             })
          },
          error:()=>
          {
             console.log("Error Here")
          }
        })
    }
    popular() {

    }
    onFilter() {
      this.isFiltered = true
    }
    onView(ele: any) {
      this.data.id = ele
      console.log(this.data.id)
      // const dialogRef = this.dialog.open(QuickViewComponent, {
      //   width: '70%',
      //   height: '70%',
      //   position: {
      //     top: '6%',
      //     left: '15%'
      //   }
      // });
    }
    l2h() {
      this.dataArray3.sort(function (a, b) {
        var keyA = a.price,
          keyB = b.price;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      this.numberData = this.dataArray3.length;
    }
    h2l() {
      this.dataArray3.sort(function (a, b) {
        var keyA = a.price,
          keyB = b.price;
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      this.numberData = this.dataArray3.length;
    }
    closePopUp() {
      this.isFiltered = false;
    }
    
}
