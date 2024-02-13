import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCardComponent } from './github-card.component';

describe('GithubCardComponent', () => {
  let component: GithubCardComponent;
  let fixture: ComponentFixture<GithubCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubCardComponent],
    });
    fixture = TestBed.createComponent(GithubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
