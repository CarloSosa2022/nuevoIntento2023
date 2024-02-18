import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//está creciendo demasiado es facil llegar a tener mas de 50 componentes y otros tipos
//un modulo es una clase que tiene un decorados y además es un agrupador que encancpula la información
//y me protege dicja información del exterior
//la mayoria de las aplicaciónes tienen muchos módulos
//hay muchas forma de crearlo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
