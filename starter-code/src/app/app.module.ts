import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import {MovieControllerService} from '../services/moviecontroller.service';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { routes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  // Configure the router module
  ],
  providers: [MovieControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
