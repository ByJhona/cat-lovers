import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGatoComponent } from './card-gato.component';

describe('CardGatoComponent', () => {
  let component: CardGatoComponent;
  let fixture: ComponentFixture<CardGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
