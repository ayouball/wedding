import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Decoration } from '../models/decoration';

@Injectable()
export class DecorationServicesService {

  apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Decoration[]>(this.apiUrl+"/decoration/");
  }
  delete(id){
    return this.http.delete(this.apiUrl+"/decoration/"+id);
  }
  add(decoration){
    return this.http.post<Decoration>(this.apiUrl+"/decoration/", decoration);
  }
  update(decoration){
    return this.http.put(this.apiUrl+"/decoration/"+decoration.id, decoration);
  }
}
