import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  apiUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<any>(this.apiUrl+"/articles/");
  }

  getArticle(id){
    return this.http.get<any>(this.apiUrl+"/articles/"+id);
  }
}
