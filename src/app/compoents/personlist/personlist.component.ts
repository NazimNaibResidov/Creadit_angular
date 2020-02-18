import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  items: Person[];
  constructor(private http: PersonService) { }

  ngOnInit() {
    return this.http.GetItems()
      .subscribe((resp: Person[]) => {
        console.log(resp);
        this.items = resp;
      });

}
}
