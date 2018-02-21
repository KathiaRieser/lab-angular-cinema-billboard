import { Injectable } from '@angular/core';
import sampleMovies from '../sample-movies';

@Injectable()
export class MovieControlerService {
  id:Number; //- A unique number used to distinguish between movies.
  title:String;// - Contains the movie title.
  poster:String;// - A URL of a poster image for the movie.
  synopsis:String; // - A brief description about the movie.
  genres:Array<String>;// - The genres of a movie, such as "Adventure", "Action", "Romantic Comedy" etc.
  year:Number;// - Movie's release year.
  director:String; // - Director of the movie.
  actors: Array<string>; // The actors' names, using one string per each actor.
  hours: Array<string>; // - The times the movie is showing. i.e. Wednesday 19:30, 22:30 would be an element of this array to indicate that you can watch a movie on wednesday at 19:30h and 22:30h.
  room: Number; // - Room number of the movie. Will be a value between 1 and 5.

    movie: Object = {
      id: this.id,
      title: this.title,
      poster: this.poster,
      synopsis: this.synopsis,
      genres: this.genres,
      year: this.year,
      director: this.director,
      actors: this.actors,
      hours: this.hours,
      room: this.room
    }

    movies: Object[];
    constructor() {
        this.movies= sampleMovies;
        console.log(this.movies);
     }


     getMovies():Object[]{

      return this.movies;

     };
     getMovie(id:number):Object{

       return this.movies.filter(x=>x.id).indexOf(id);
     };
}