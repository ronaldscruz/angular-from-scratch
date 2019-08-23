import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  product_name: string;

  constructor() {
    this.product_name = "Adidas NMD Runner"
  }

  ngOnInit() {
  }

}
