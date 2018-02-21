import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent }
];