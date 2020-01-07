import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pack } from '../models/pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiUrl = "http://localhost:3000/api/packs";
  apiImage = "http://localhost:3000/api/images";

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Pack[]>(this.apiUrl);
  }
  delete(id){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  add(pack){
    return this.http.post<Pack>(this.apiUrl, pack);
  }
  update(pack){
    return this.http.put(`${this.apiUrl}/${pack.id}`, {pack : pack});
  }
  disponible(id, disponible){
    return this.http.patch(`${this.apiUrl}/${id}`, {disponible: !disponible});
  }

  
  uploadImages(){

  }

  
}
