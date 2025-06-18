import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginResponderPage } from './login-responder.page';

describe('LoginResponderPage', () => {
  let component: LoginResponderPage;
  let fixture: ComponentFixture<LoginResponderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResponderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
