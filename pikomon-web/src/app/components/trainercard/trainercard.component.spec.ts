import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainercardComponent } from './trainercard.component';

describe('TrainercardComponent', () => {
  let component: TrainercardComponent;
  let fixture: ComponentFixture<TrainercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainercardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
