import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCitizenPage } from './login-citizen.page';

describe('LoginCitizenPage', () => {
  let component: LoginCitizenPage;
  let fixture: ComponentFixture<LoginCitizenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCitizenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
