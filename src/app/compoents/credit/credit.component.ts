import { Credit } from './../../model/credit';
import { CreditService } from './../../services/credit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(private http:CreditService) { }
  item:Credit[]=[];
  ngOnInit() {
   
  }

  Add(userName: HTMLInputElement, surName: HTMLInputElement, passNum: HTMLInputElement, email: HTMLInputElement, endDate:HTMLInputElement, amount:HTMLInputElement)
  {
   
  const itemed : Credit={
     userName:userName.value,
     surName:surName.value,
     Email:email.value,
    
     passNum:passNum.value,
     endDate:new Date(endDate.value),
     amount:Number(amount.value)
   }
   

   this.http.InsertItem(itemed).subscribe(x=>{
     this.item.push(itemed);
   });
  userName.value='';
  surName.value='';
  email.value='';
  passNum.value='';
  endDate.value='';
  amount.value='';
  }


}
