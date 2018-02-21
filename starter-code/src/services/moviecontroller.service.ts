import {Injectable} from '@angular/core';
import {sampleMovies} from '../sample-movies';
//import {movieInterface} from './movieInterface';
export interface movieInterface{

  id:number; //- A unique number used to distinguish between movies.
  title:string;// - Contains the movie title.
  poster:string;// - A URL of a poster image for the movie.
  synopsis:string; // - A brief description about the movie.
  genres:Array<string>;// - The genres of a movie, such as "Adventure", "Action", "Romantic Comedy" etc.
  year:number;// - Movie's release year.
  director:string; // - Director of the movie.
  actors: Array<string>; // The actors' names, using one string per each actor.
  hours: Array<string>; // - The times the movie is showing. i.e. Wednesday 19:30, 22:30 would be an element of this array to indicate that you can watch a movie on wednesday at 19:30h and 22:30h.
  room: number; // - Room number of the movie. Will be a value between 1 and 5.


}

@Injectable()
export class MovieControllerService{
 
    movie: movieInterface;
    movies: Array<movieInterface>;
    constructor() {
        this.movies = sampleMovies;
      
     }

     getMovies():Array<movieInterface>{

      return this.movies;

     };
     
     getMovie(idMovie:number):movieInterface{
       
      return this.movies.filter(x=>x.id === idMovie)[0];
       
     };
}