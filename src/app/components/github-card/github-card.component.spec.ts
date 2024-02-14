import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCardComponent } from './github-card.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('GithubCardComponent', () => {
  let component: GithubCardComponent;
  let fixture: ComponentFixture<GithubCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubCardComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(GithubCardComponent);
    component = fixture.componentInstance;
    component.repository = {
      html_url: '',
      name: '',
      description: '',
      topics: [],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
