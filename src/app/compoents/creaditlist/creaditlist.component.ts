import { Credit } from './../../model/credit';
import { CreditService } from './../../services/credit.service';
import { Route, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creaditlist',
  templateUrl: './creaditlist.component.html',
  styleUrls: ['./creaditlist.component.css']
})
export class CreaditlistComponent implements OnInit {

  items:Credit[]=[];
  constructor(private http: CreditService) { }

  ngOnInit() {
    this.http.GetItems()
    .subscribe((x:Credit[])=>{
      console.log(x);
      this.items=x;
    });
   

  }
Delete(data:Credit)
{
  this.http.Remove(data.id).subscribe((resp)=>{
  const index=this.items.indexOf(data);
  this.items.splice(index,1);
  })
 
}
}
