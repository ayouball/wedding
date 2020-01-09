import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles
  constructor(private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.articleService.findAll().subscribe(res => {
      console.log(res)
      this.articles=res
    },err=>{
      console.log(err)
    })
  }

}
