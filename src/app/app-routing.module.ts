import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './components/content/content.component';
import { OffreComponent } from './components/offre/offre.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'content', component: ContentComponent },
    { path: 'offre/:id', component: OffreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
