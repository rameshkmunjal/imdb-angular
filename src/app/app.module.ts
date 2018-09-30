import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {RouterModule, Routes} from '@angular/router';

import {ImdbHttpService} from './imdb-http.service';
import {HttpClientModule} from '@angular/common/http';
import { SingleMovieComponent } from './single-movie/single-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleMovieComponent
       
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot([ 
      {path:'home', component:HomeComponent},      
      {path:'singleMovie/:imdbID', component:SingleMovieComponent},
      {path:'**', component:HomeComponent}
      //blog/:blogId
    ])      
  ],
  providers: [ImdbHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
