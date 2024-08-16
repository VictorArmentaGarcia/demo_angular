import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    CounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo';
  edad: number = 31;
  usuarios: string[] = ['victor', 'manuel', 'test'];
  //usuarios!: string[];
  visible: boolean = false;
 counter: number = 0;

  subtitle:string = 'Contador con estado de sesion'; 
  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log("valor de visible " + this.visible);
  }

  setCounter(counterEvent: number): void {
    this.counter = counterEvent;
  }

}
