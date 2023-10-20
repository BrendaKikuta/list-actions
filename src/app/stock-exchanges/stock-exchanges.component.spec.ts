import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangesComponent } from './stock-exchanges.component';

describe('StockExchangesComponent', () => {
  let component: StockExchangesComponent;
  let fixture: ComponentFixture<StockExchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockExchangesComponent]
    });
    fixture = TestBed.createComponent(StockExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
