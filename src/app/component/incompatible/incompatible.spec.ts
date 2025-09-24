import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompatibleComponent } from './incompatible';

describe('IncompatibleComponent', () => {
  let component: IncompatibleComponent;
  let fixture: ComponentFixture<IncompatibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncompatibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncompatibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
