import { Pack } from '../models/pack';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Pack[]>(this.apiUrl+"/offre/");
  }
  delete(id){
    return this.http.delete(this.apiUrl+"/offre/"+id);
  }
  add(pack){
    return this.http.post<Pack>(this.apiUrl+"/offre/", pack);
  }
  update(pack){
    return this.http.put(this.apiUrl+"/offre/"+pack.id, pack);
  }
  disponible(id, disponible){
    return this.http.put(this.apiUrl+"/offre/"+id+"/disponibilte", {disponible: !disponible});
  }

  uploadPhotoProduct(file: File, id): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl+'/uploadFile/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  
}
