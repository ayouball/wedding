import { Pack } from '../models/pack';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }


  findAllDispo(){
    return this.http.get<Pack[]>(this.apiUrl+"/offre/dispo");
  }
  
  findOne(id){
    return this.http.get<Pack>(this.apiUrl+"/offre/"+id);
  }
  
}
