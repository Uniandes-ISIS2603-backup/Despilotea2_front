import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasEnvioComponent } from './tarifas-envio.component';

describe('TarifasEnvioComponent', () => {
  let component: TarifasEnvioComponent;
  let fixture: ComponentFixture<TarifasEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifasEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
