import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaVeiculo } from './consulta-veiculo';

describe('ConsultaVeiculo', () => {
  let component: ConsultaVeiculo;
  let fixture: ComponentFixture<ConsultaVeiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaVeiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaVeiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
