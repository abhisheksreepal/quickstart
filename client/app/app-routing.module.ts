import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import {CollectionsComponents} from  './components/collections/collections.component';
import {CollectionsDetailComponent} from  './components/collectionsDetail/collections-detail.component'
import {FeatureOverviewComponent} from './components/featureOverview/featureOverview.component';
const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'collectionDetail/:name', component: CollectionsDetailComponent },
  { path: 'runOverview/:collectionName/:runId', component: FeatureOverviewComponent },
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
