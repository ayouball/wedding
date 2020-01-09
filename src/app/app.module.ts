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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    NavhomeComponent,
    OffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule,
    FileUploadModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
