import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessTrainer } from './chess-trainer';

describe('ChessTrainer', () => {
  let component: ChessTrainer;
  let fixture: ComponentFixture<ChessTrainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessTrainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessTrainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
