import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  name:string=""
  email:string=""
  msg:string=""
  dataHere=
  {
     "name":"",
     "email":"",
     "msg":""
  }
  constructor(private data:APIService)
  {
      
  }
  onSubmit()
  {
    console.log(this.name)
    this.dataHere.name=this.name
    this.dataHere.email=this.email
    this.dataHere.msg=this.msg
    console.log(this.dataHere)
    this.data.addMsg(this.dataHere).subscribe({
      next:(resp)=>
      {
          console.log('Posted Successfully')
      },
      error:()=>
      {
         console.log('Unable to send your msg')
      }
    })
  }
}
