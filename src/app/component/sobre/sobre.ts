// SOBRE.TS — Componente Angular (ou lógica básica)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.scss']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Pode carregar dados dinâmicos aqui, se necessário
    console.log('Página "Sobre" carregada com sucesso!');
  }

  // Exemplo de método que poderia ser usado em interações futuras
  onCardClick(caseName: string): void {
    alert(`Você clicou no caso: ${caseName}`);
  }
}