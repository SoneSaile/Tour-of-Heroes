import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  getHeroes(): void {
  }

}
