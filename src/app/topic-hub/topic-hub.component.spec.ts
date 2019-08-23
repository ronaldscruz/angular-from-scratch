import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHubComponent } from './topic-hub.component';

describe('TopicHubComponent', () => {
  let component: TopicHubComponent;
  let fixture: ComponentFixture<TopicHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
