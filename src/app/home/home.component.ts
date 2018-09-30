import { Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {ImdbHttpService} from "../imdb-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy { 
  public allMovies;
  public titlesArray = ["boy", "girl", "man", "woman", "king", "queen", "city", "player", "day", "night", "dream"];
  public index = Math.floor(Math.random() * (this.titlesArray.length-1))+1;
  public titleChoice = this.titlesArray[this.index];
  constructor(public imdbHttpService:ImdbHttpService, private elementRef:ElementRef) {
    console.log("Home Component constructor called");

   }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(200, 190, 50)';
    console.log("Home Component OnInit Called");
    this.allMovies = this.imdbHttpService.getAllMovies(this.titleChoice).subscribe(
      data=>{
        console.log("logging data");
        this.allMovies = data.Search;
        console.log(this.allMovies);
      }, 
      error=>{
        console.log("some error occurred");
      }
    )
    console.log(this.allMovies);
  }
  
  ngOnDestroy(){
    console.log("Home Component Destroyed");
  }

}
