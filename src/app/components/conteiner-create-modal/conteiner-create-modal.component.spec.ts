import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerCreateModalComponent } from './conteiner-create-modal.component';


describe('ConteinerCreateModalComponent', () => {
  let component: ConteinerCreateModalComponent;
  let fixture: ComponentFixture<ConteinerCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConteinerCreateModalComponent]
    });
    fixture = TestBed.createComponent(ConteinerCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
