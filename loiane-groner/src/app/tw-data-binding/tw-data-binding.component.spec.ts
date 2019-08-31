import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwDataBindingComponent } from './tw-data-binding.component';

describe('TwDataBindingComponent', () => {
  let component: TwDataBindingComponent;
  let fixture: ComponentFixture<TwDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
