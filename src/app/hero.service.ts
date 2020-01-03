import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable()
export class HeroService {

  private heros: Hero[] = HEROS;

  constructor() { }

  getHeros(): Hero[] {
    return this.heros;
  }

}
