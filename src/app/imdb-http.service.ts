import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ImdbHttpService {
  public allMovies;
  public searchTitle = 'girl';
  public baseUrl = 'http://www.omdbapi.com';
  public authToken = "499e294" ;

  constructor(private _http:HttpClient) {
    console.log("imdb http service called");
  }
  
  public getAllMovies(titleChoice):any{
    this.searchTitle=titleChoice;
    let myResponse = this._http.get(this.baseUrl+"/?s="+this.searchTitle+"&apikey="+this.authToken);
    console.log(myResponse);
    return myResponse;
  }
  public getSingleMovie(singleMovieId):any{
    let myResponse = this._http.get(this.baseUrl+"/?i="+singleMovieId+"&apikey="+this.authToken);
    console.log(myResponse);
    return myResponse;
  }
}
