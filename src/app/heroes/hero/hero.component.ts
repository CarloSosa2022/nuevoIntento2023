import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent
{
  public name: string = 'Kakaroto';
  public age:  number = 45;

  get capitalizadName():string
  {
  return this.name .toUpperCase();
  }

  getHeroDescription():string
  {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void
  {
    this.name = 'Vegeta';
  }

  changeAge():void
  {
    this.age = 50 ;
  }

  resetform():void
  {
    this.name='Kakaroto';
    this.age= 45;
  }

}
