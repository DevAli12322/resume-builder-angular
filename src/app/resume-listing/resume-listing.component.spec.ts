import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListingComponent } from './resume-listing.component';

describe('ResumeListingComponent', () => {
  let component: ResumeListingComponent;
  let fixture: ComponentFixture<ResumeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
