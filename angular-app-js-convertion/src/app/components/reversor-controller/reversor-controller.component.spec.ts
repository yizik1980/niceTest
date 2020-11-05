import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversorControllerComponent } from './reversor-controller.component';

describe('ReversorControllerComponent', () => {
  let component: ReversorControllerComponent;
  let fixture: ComponentFixture<ReversorControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversorControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
