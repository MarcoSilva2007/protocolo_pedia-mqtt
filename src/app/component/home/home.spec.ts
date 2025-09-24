// HOME.SPEC.TS — Testes unitários
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter o título principal', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.hero-content h1')).toBeTruthy();
  });

  it('deve conter a seção "O que é?"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.what-is-section')).toBeTruthy();
  });

  it('deve conter o diagrama', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.diagram-container img')).toBeTruthy();
  });
});