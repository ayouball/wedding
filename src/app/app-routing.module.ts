import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './components/content/content.component';
import { TablesComponent } from './components/tables/tables.component';
import { DecorationsComponent } from './components/decorations/decorations.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'content', component: ContentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'decorations', component: DecorationsComponent },
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
