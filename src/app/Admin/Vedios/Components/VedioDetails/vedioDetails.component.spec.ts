import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VedioDetailsComponent } from './vedioDetails.component';

describe('VedioDetailsComponent', () => {
  let component: VedioDetailsComponent;
  let fixture: ComponentFixture<VedioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
