import { NgModule }      from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './components/pageNotFound/page-not-found.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import {CollectionsComponents} from './components/collections/collections.component';
import {CollectionsService} from './services/collections.service';
import {CollectionsDetailComponent} from './components/collectionsDetail/collections-detail.component';
import {LoadingIndicatorComponent} from './components/loadingIndicator/loading-indicator.component';
import {ChartsModule} from 'ng2-charts';
import {PieChartComponent} from './components/pieChart/piechart.component';
import {RunInfoTableComponent} from './components/runInfoTable/run-info-table.component';
import {FeatureOverviewComponent} from './components/featureOverview/featureOverview.component';
import {FeatureComponent} from './components/feature/feature.component';
import {DemoModalStaticComponent} from './components/staticModal/static-modal.component';
import {ModalModule,AccordionModule,TooltipModule} from 'ngx-bootstrap'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule,HttpModule,ChartsModule,ModalModule.forRoot(),AccordionModule.forRoot() ,TooltipModule.forRoot()],
  declarations: [ AppComponent, DashboardComponent, PageNotFoundComponent, ToolBarComponent ,CollectionsComponents,CollectionsDetailComponent,LoadingIndicatorComponent,PieChartComponent,RunInfoTableComponent,FeatureOverviewComponent,FeatureComponent,DemoModalStaticComponent],
  bootstrap:    [ AppComponent ],
  providers: [ CollectionsService ]

})
export class AppModule { }
