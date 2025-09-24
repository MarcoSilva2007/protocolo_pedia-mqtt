// SOBRE.SPEC.TS — Testes unitários (opcional, mas útil para manutenção)
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreComponent } from './sobre';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter a seção "Ficha Técnica"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.tech-specs')).toBeTruthy();
  });

  it('deve conter 3 casos de sucesso', () => {
    const compiled = fixture.nativeElement;
    const cases = compiled.querySelectorAll('.case-card');
    expect(cases.length).toBe(3);
  });
});