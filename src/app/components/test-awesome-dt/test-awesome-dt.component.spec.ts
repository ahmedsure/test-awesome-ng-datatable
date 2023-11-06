import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAwesomeDTComponent } from './test-awesome-dt.component';

describe('TestAwesomeDTComponent', () => {
  let component: TestAwesomeDTComponent;
  let fixture: ComponentFixture<TestAwesomeDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAwesomeDTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAwesomeDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
