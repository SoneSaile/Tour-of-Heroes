import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Hero } from '../Model/hero.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient) { 
      
    }
  public getHeroes(): Observable<any> {
    return this.http.get('https://api.opendota.com/api/heroes');
  }
}
