import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterResponderPage } from './register-responder.page';

describe('RegisterResponderPage', () => {
  let component: RegisterResponderPage;
  let fixture: ComponentFixture<RegisterResponderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterResponderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
