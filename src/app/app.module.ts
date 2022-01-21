import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http"
import { SearchPipe } from "./search.pipe"
import { FormsModule } from '@angular/forms';
import { ImageDetailComponent } from './components/image-detail/image-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
