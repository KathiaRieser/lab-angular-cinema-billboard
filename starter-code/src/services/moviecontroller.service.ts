import {Injectable} from '@angular/core';
import {sampleMovies} from '../sample-movies';
import {movieInterface} from './movieInterface';

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
       console.log(typeof(idMovie));
      //return this.movies.filter( (x) => {console.log(typeof(x.id));  x.id == idMovie})[0];
      return this.movies.filter(x=> x.id === idMovie)[0];
       
     };
}