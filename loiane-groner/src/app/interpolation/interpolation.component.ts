import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  favorite_framework: string;
  nature_img: string;

  constructor() {
    this.favorite_framework = "Angular";
    this.nature_img = "http://lorempixel.com/400/200/nature/";
  }

  multiply(v1: number, v2: number) {
    return v1 * v2
  } 

  ngOnInit() {
  }

}
