import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditHeroeComponent } from './dialog-edit-heroe.component';

describe('DialogEditHeroeComponent', () => {
  let component: DialogEditHeroeComponent;
  let fixture: ComponentFixture<DialogEditHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
