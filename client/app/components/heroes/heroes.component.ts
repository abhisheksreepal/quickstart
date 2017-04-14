import { Component } from '@angular/core';
import {Hero } from '../../models/Hero';
import {HeroService } from '../../services/hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero ;
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  getHeroesCallback(): void {
    let self = this;
    this.heroService.getHeroesCallBack(function(err: any, data: Hero[]) {
      if (err) {
        throw Error('Something wrong - ${err}');
      }
      self.heroes = data;
     });
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
