import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TvShowsComponent } from './components/pages/tv-shows/tv-shows.component';
import { VideosComponent } from './components/pages/videos/videos.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'videos',component:VideosComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tv-shows',component:TvShowsComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
