import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteHeroeComponent } from './dialog-delete-heroe.component';

describe('DialogDeleteHeroeComponent', () => {
  let component: DialogDeleteHeroeComponent;
  let fixture: ComponentFixture<DialogDeleteHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
