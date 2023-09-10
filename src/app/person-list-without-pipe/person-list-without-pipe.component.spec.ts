import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListWithoutPipeComponent } from './person-list-without-pipe.component';

describe('PersonListWithoutPipeComponent', () => {
  let component: PersonListWithoutPipeComponent;
  let fixture: ComponentFixture<PersonListWithoutPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonListWithoutPipeComponent]
    });
    fixture = TestBed.createComponent(PersonListWithoutPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
