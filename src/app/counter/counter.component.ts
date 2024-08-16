import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  
  counter: number = 0;
  @Input() title!: string;
  @Output() counterEmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = (localStorage.getItem('count') != undefined) ?
    parseInt(localStorage.getItem('count')!) : 
    0;
  }

  setCounter(): void {
    this.counter++;
    localStorage.setItem('count' , this.counter.toString());
    this.counterEmit.emit(this.counter);
  }

}
