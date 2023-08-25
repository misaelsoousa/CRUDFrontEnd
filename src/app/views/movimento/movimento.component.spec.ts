import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoComponent } from './movimento.component';

describe('MovimentoComponent', () => {
  let component: MovimentoComponent;
  let fixture: ComponentFixture<MovimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentoComponent]
    });
    fixture = TestBed.createComponent(MovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
