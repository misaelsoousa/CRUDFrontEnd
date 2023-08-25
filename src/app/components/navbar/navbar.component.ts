import { Component } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  contador = 0;

  lista = [
    {
      id: 0,
      titulo: "Teste 1",
      descricao: "Lorem ipsum dolor sit ammet"
    },
    {
      id: 1,
      titulo: "Teste 2",
      descricao: "Lorem ipsum dolor sit ammet"
    },
    {
      id: 2,
      titulo: "Teste 3",
      descricao: "Lorem ipsum dolor sit ammet"
    },
  ]

  teste() {
    this.contador++;
  }
}
