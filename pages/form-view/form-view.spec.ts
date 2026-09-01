import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormView } from './form-view';

describe('FormView', () => {
  let component: FormView;
  let fixture: ComponentFixture<FormView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormView],
    }).compileComponents();

    fixture = TestBed.createComponent(FormView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
