import { Component, OnInit } from '@angular/core';

import { HeroService } from './../hero.service'
import { HEROLIST } from './../mock-heroes'
import { Hero } from './../hero'
@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {

  constructor(private myService: HeroService) {
   }
  heroes: Hero[];
  sellectedHero: Hero;

  onSelect(hero: Hero){
    this.sellectedHero = hero;
    console.log(this.sellectedHero)
  }
  ngOnInit() {
    this.myService.getHeroes()
    .subscribe(heroes => this.heroes=heroes);

  }

}
