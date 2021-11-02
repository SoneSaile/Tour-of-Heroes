import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero.model';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any;
  erro : any;
  constructor(private heroService: HeroService, private messageService: MessageService) {
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (data : Hero) =>{
        this.heroes = data;
        console.log("O data que recebemos", data);
        console.log("Variável preenchida", this.heroes);
        this.heroes.forEach((hero: any) => {
          hero.img = "/assets/heroesImages/1.png";
        });
      }, 
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      }
    );
  }

  getHeroesImages() {
    
  }
}
