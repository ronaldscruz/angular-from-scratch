import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-product',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {

  @Input() product_name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
