import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HEROS);
  }

}
