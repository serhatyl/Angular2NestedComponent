import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowdatabindingComponent } from './twowdatabinding.component';

describe('TwowdatabindingComponent', () => {
  let component: TwowdatabindingComponent;
  let fixture: ComponentFixture<TwowdatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowdatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
