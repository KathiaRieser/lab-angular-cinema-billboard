import { Component, OnInit, Input } from '@angular/core';
import{MovieControllerService} from '../../services/moviecontroller.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieControllerService]
})
export class MovieComponent implements OnInit {

  filmId:number;
  movie:any;
  constructor(public router:ActivatedRoute , public movies:MovieControllerService, public routerHome:Router ) {

    this.router.params.subscribe(p => {
      this.filmId = p.id;
      this.movie = this.movies.getMovie(this.filmId);
    });

    
   }

  ngOnInit() {
  }

  goToHome(){
    console.log(this.filmId);
    console.log(this.movie);
    this.routerHome.navigate(['/home'])
    }

}
