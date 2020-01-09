import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './components/content/content.component';
import { OffreComponent } from './components/offre/offre.component';
import { TablesComponent } from './components/tables/tables.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'content', component: ContentComponent },
    { path: 'offre/:id', component: OffreComponent},
    { path: 'home', component: HomeComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'decorations', component: DecorationsComponent },
    { path: 'articles', component: ArticlesComponent},
    { path: 'article/:id', component:ArticleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
