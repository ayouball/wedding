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
import { TablesComponent } from './components/tables/tables.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { DecorationServicesService } from 'src/app/services/decoration-services.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HomeComponent,
    TablesComponent,
    DecorationsComponent
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
    DecorationServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
