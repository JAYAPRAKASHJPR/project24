import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTaxComponent } from './supplier-tax.component';

describe('SupplierTaxComponent', () => {
  let component: SupplierTaxComponent;
  let fixture: ComponentFixture<SupplierTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
