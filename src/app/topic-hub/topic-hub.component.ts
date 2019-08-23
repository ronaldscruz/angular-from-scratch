import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-hub',
  templateUrl: './topic-hub.component.html',
  styleUrls: ['./topic-hub.component.css']
})
export class TopicHubComponent implements OnInit {

  topics: string[];

  constructor() {
    this.topics = [
      "prop-binding",
      "interpolation",
      "class-style-binding",
      "event-binding",
      "tw-data-binding",
    ]
  }

  ngOnInit() {
  }

}
