import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROLIST } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor() { }

  getHeroes(): Hero[]{
    return HEROLIST;
  }
}
