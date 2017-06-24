import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteembarcadosComponent } from './componenteembarcados.component';

describe('ComponenteembarcadosComponent', () => {
  let component: ComponenteembarcadosComponent;
  let fixture: ComponentFixture<ComponenteembarcadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteembarcadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteembarcadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
