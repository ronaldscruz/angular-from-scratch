import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  counter_value: number;

  constructor() {
    this.counter_value = 0;
  }

  ngOnInit() {
  }

  counterIncrease(){
    this.counter_value += 1;
  }

  counterDecrease(){
    this.counter_value -= 1;
  }

}
