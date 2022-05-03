import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {CarouselModule} from 'primeng/carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sharepage/header/header.component';
import { FooterComponent } from './components/sharepage/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SliderComponent } from './components/pages/home/slider/slider.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { LatestMoviesComponent } from './components/pages/home/latest-movies/latest-movies.component';
import { UpcomingMoviesComponent } from './components/pages/home/upcoming-movies/upcoming-movies.component';
import { MovieOfTheYearComponent } from './components/pages/home/movie-of-the-year/movie-of-the-year.component';
import { TrendingComponent } from './components/pages/home/trending/trending.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMovieComponent } from './components/pages/home/tab-movie/tab-movie.component';
import { EpisodesComponent } from './components/pages/home/episodes/episodes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { TvShowsComponent } from './components/pages/tv-shows/tv-shows.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    NotFoundComponent,
    VideosComponent,
    ContactComponent,
    BlogComponent,
    LatestMoviesComponent,
    UpcomingMoviesComponent,
    MovieOfTheYearComponent,
    TrendingComponent,
    TabMovieComponent,
    EpisodesComponent,
    MoviesComponent,
    TvShowsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    FormsModule,
    CarouselModule, 
    MatSliderModule,
    MatTabsModule,
    MatSelectModule,
    IvyCarouselModule, BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule
    
   
  ],
  providers: [
    ApiService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
