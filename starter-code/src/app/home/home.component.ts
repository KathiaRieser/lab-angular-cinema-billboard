import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MovieControllerService} from '../../services/moviecontroller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesHome:Array<any>;
  
  constructor(public router:Router, private movies: MovieControllerService) { 

    this.moviesHome = movies.getMovies();
     
  }

  ngOnInit() {
  }

  goToMovie(id){
    this.router.navigate(['/movie/',id]);  // <!-- Programmatically navigate to home
  }

}
