import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  input_email: string;
  sent_email: string;

  fruits: string[];
  requested_fruit: string;

  constructor() {
    this.fruits = [
      "Apple",
      "Strawberry",
      "Watermelon",
      "Grape",
      "Pineapple",
      "Banana",
      "Tomato",
      "Kiwi",
    ]
  }

  ngOnInit() {
  }

  sendEmail(){
    this.sent_email = this.input_email; 
  }

  filterFruits( requested: string = "" ){
    if(requested){
      return this.fruits.filter(fruit => fruit.startsWith(requested))
    }

    return this.fruits;
  }

}
