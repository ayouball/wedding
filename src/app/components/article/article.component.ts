import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article
  constructor(private router:Router, private route:ActivatedRoute, private articleService: ArticleServiceService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.id;
    this.articleService.getArticle(id).subscribe(
      res=>{
        console.log(res)
        this.article=res
      },err=>{
        console.log(err)
      }
    )
  }

}
