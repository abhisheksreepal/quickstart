import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './components/heroDetail/hero-detail.component';
import {HeroService} from './services/hero.service';
import { HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './components/pageNotFound/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeroDetailComponent , HeroesComponent, DashboardComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]

})
export class AppModule { }
