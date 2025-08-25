import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingWave } from './loading-wave';

describe('LoadingWave', () => {
  let component: LoadingWave;
  let fixture: ComponentFixture<LoadingWave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingWave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingWave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
