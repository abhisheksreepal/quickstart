import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
template: `
     <my-toolbar></my-toolbar>
     <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
     <a routerLink="/collections" routerLinkActive="active">Projects</a>
   </nav>
   <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']

})
export class AppComponent {
}
