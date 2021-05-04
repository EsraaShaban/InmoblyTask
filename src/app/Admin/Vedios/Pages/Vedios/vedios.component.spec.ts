import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VediosComponent } from './vedios.component';


describe('VediosComponent', () => {
  let component: VediosComponent;
  let fixture: ComponentFixture<VediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
