import { CounterComponent } from './components/counter/counter.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[CounterComponent],
  exports:[CounterComponent]
})
export class CounterModule {}


//el objetivoe s que su información esté encapsulada, ya con esto se pude usar dentro de éste escope,
// pero siq ueiremos usarlo fuera es necesario exportar
