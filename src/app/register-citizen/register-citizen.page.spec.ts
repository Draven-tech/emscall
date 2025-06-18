import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCitizenPage } from './register-citizen.page';

describe('RegisterCitizenPage', () => {
  let component: RegisterCitizenPage;
  let fixture: ComponentFixture<RegisterCitizenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCitizenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
