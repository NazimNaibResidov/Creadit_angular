import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends MainService {

  constructor(http:HttpClient) { 
    super("https://localhost:44344/api/Person",http)
  }
}
