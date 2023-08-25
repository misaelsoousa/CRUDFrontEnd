import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoCreateModalComponent } from './movimento-create-modal.component';

describe('MovimentoCreateModalComponent', () => {
  let component: MovimentoCreateModalComponent;
  let fixture: ComponentFixture<MovimentoCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentoCreateModalComponent]
    });
    fixture = TestBed.createComponent(MovimentoCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
