import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROLIST } from './mock-heroes'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor() { }

  getHeroes(): Observable<Hero[]>{
    return of(HEROLIST);
  }
}
