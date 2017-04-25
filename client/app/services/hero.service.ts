import {Injectable} from '@angular/core';
import {HEROES}  from '../models/mock-heroes';
import {Hero} from '../models/Hero';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 1000);
  });
}

getHeroesCallBack(callback: (err: Error, data: Hero[]) => void) {
      setTimeout(() => callback(null, HEROES ), 10000 );
  }

  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}
