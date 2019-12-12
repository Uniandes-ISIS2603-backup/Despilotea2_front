import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuhtorComponent } from './auhtor.component';

describe('AuhtorComponent', () => {
  let component: AuhtorComponent;
  let fixture: ComponentFixture<AuhtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuhtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuhtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
