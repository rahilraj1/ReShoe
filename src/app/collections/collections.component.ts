import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { APIService } from '../Services/api.service';
import { QuickViewComponent } from '../quick-view/quick-view.component';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.less']
})
export class CollectionsComponent {
  selected = ""
  heading = "Shop"
  isFiltered: boolean = false;
  isFirst: boolean = true
  dataArray: Array<any> = []
  dataArray2: Array<any> = []
  dataArray3: Array<any> = []
  filterArray:Array<any>=[]
  numberData = 0
  constructor(private data: APIService, private dialog: MatDialog) {
    this.data.getBestSeller().subscribe({
      next: (resp) => {
        this.dataArray = resp
        for (let ele of this.dataArray) {
          this.dataArray3.push(ele)
        }
      }
    })
    this.data.getNewArrival().subscribe({
      next: (resp) => {
        this.dataArray2 = resp
        for (let ele of this.dataArray2) {
          this.dataArray3.push(ele)
        }
        this.numberData = this.dataArray3.length;
      }
    })
  }
  onView(ele: any) {
    this.data.id = ele
    console.log(this.data.id)
    const dialogRef = this.dialog.open(QuickViewComponent, {
      width: '70%',
      height: '70%',
      position: {
        top: '6%',
        left: '15%'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  popular() {

  }
  onFilter() {
    this.isFiltered = true
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
  onFilter2(ele: any) {
    let ch = ele.charAt(0);
    if(ch=='M')
    {
       this.heading='MEN'
    }
    else if(ch=='W')
    {
      this.heading='WOMEN'
    }
    else
    {
       this.heading='ALL'
    }
    if (this.isFirst == true) {
       this.filterArray = this.dataArray3
      this.isFirst=false;
    }
    else
    {
       this.dataArray3=this.filterArray
    }
    this.dataArray3 = this.dataArray3.filter((e) => {
      return ch == e.category.charAt(0)
    })
    if(this.dataArray3.length==0)
    {
       this.dataArray3=this.filterArray
    }
    this.numberData=this.dataArray3.length;
    console.log(this.dataArray3)
    this.closePopUp()
  }
}
