import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  // fields
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  // methods
  onSelect(hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }


}
