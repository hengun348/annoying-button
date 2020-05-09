import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoyingButtonComponent } from './annoying-button.component';

describe('AnnoyingButtonComponent', () => {
  let component: AnnoyingButtonComponent;
  let fixture: ComponentFixture<AnnoyingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoyingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoyingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
