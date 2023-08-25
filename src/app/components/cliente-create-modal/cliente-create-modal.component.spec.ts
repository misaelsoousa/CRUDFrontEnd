import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateModalComponent } from './cliente-create-modal.component';

describe('ClienteCreateModalComponent', () => {
  let component: ClienteCreateModalComponent;
  let fixture: ComponentFixture<ClienteCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteCreateModalComponent]
    });
    fixture = TestBed.createComponent(ClienteCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
