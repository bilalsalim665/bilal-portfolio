import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTabsComponent } from './experience-tabs.component';

describe('ExperienceTabsComponent', () => {
  let component: ExperienceTabsComponent;
  let fixture: ComponentFixture<ExperienceTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
