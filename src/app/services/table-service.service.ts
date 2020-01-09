import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Table[]>(this.apiUrl+"/table/");
  }
  delete(id){
    return this.http.delete(this.apiUrl+"/table/"+id);
  }
  add(table){
    return this.http.post<Table>(this.apiUrl+"/table/", table);
  }
  update(table){
    return this.http.put(this.apiUrl+"/table/"+table.id, table);
  }
}
