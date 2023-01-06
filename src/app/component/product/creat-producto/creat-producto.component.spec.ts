import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProductoComponent } from './creat-producto.component';

describe('CreatProductoComponent', () => {
  let component: CreatProductoComponent;
  let fixture: ComponentFixture<CreatProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
