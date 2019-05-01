import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendosortComponent } from './kendosort.component';

describe('KendosortComponent', () => {
  let component: KendosortComponent;
  let fixture: ComponentFixture<KendosortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendosortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendosortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
