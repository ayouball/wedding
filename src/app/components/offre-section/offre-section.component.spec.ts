import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreSectionComponent } from './offre-section.component';

describe('OffreSectionComponent', () => {
  let component: OffreSectionComponent;
  let fixture: ComponentFixture<OffreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
