import { NgModule }      from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './components/heroDetail/hero-detail.component';
import {HeroService} from './services/hero.service';
import { HeroesComponent} from './components/heroes/heroes.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './components/pageNotFound/page-not-found.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import {CollectionsComponents} from './components/collections/collections.component';
import {CollectionsService} from './services/collections.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MaterialModule.forRoot(), BrowserAnimationsModule,HttpModule ],
  declarations: [ AppComponent, HeroDetailComponent , HeroesComponent, DashboardComponent, PageNotFoundComponent, ToolBarComponent ,CollectionsComponents],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService,CollectionsService ]

})
export class AppModule { }
