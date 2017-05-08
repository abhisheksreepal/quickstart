import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import {CollectionsComponents} from  './components/collections/collections.component';
import {CollectionsDetailComponent} from  './components/collectionsDetail/collections-detail.component'
const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'collectionDetail/:name', component: CollectionsDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  {path: 'collections', component: CollectionsComponents},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
