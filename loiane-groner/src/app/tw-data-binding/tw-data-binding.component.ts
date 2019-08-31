import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tw-data-binding',
  templateUrl: './tw-data-binding.component.html',
  styleUrls: ['./tw-data-binding.component.css']
})
export class TwDataBindingComponent implements OnInit {

  nickname: string;

  person: any;

  constructor() {
    this.nickname = "";
    this.person = {
      name: "",
      age: "",
    }
  }

  ngOnInit() {
  }

}
