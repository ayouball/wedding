import { Pack } from '../models/pack';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiUrl = "http://localhost:3000/api/packs";

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
    return this.http.put(`${this.apiUrl}/${pack.id}`, pack);
  }
  disponible(id, disponible){
    return this.http.patch(`${this.apiUrl}/${id}`, {disponible: !disponible});
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
      })
  };
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://192.168.1.104:8080/image/', data);
    return this.http.request(newRequest);
    }
  
}
