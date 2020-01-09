import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {FileUploadModule} from 'ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { HomeService } from './services/home.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavhomeComponent } from './components/navhome/navhome.component';
import { OffreComponent } from './components/offre/offre.component';
import { TablesComponent } from './components/tables/tables.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { DecorationServicesService } from 'src/app/services/decoration-services.service';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    NavhomeComponent,
    OffreComponent,
    TablesComponent,
    DecorationsComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule,
    FileUploadModule
  ],
  providers: [
    DecorationServicesService,
    HomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
