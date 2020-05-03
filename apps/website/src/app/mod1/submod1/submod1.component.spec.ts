import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Submod1Component } from './submod1.component';

describe('Submod1Component', () => {
  let component: Submod1Component;
  let fixture: ComponentFixture<Submod1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
