import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomArrayComponent } from './bottom-array.component';

describe('BottomArrayComponent', () => {
  let component: BottomArrayComponent;
  let fixture: ComponentFixture<BottomArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
