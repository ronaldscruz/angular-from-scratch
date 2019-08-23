import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

  img_url: string;
  friend_name: string;

  constructor() {
    this.img_url = "http://lorempixel.com/400/200/sports/";
    this.friend_name = "Natasha";
  }

  ngOnInit() {
  }

}
