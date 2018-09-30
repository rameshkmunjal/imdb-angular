import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router  } from '@angular/router';
import {ImdbHttpService} from "../imdb-http.service";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit, OnDestroy {
    public currentMovie;    

    constructor(private  _route:ActivatedRoute, private router:Router,public imdbHttpService:ImdbHttpService) { 
    console.log("single-movie component constructor called")
  }

  ngOnInit() {
    
    console.log("ngInit single-movie component called");
    let singleMovieId = this._route.snapshot.paramMap.get('imdbID');
    console.log(singleMovieId);
    this.imdbHttpService.getSingleMovie(singleMovieId).subscribe(
      data=>{
        console.log("logging data");
        this.currentMovie = data;
        console.log(this.currentMovie);
      }, 
      error=>{
        console.log("some error occurred");
      }
    )
    console.log(this.currentMovie);
  }

  ngOnDestroy() {
    console.log("single-movie component destroyed");
  }

}
