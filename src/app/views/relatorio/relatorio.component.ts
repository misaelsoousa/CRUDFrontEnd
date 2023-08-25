import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  listaRelatorio = null;
  listaClientes = null;
  listaSumario = null;


  ngOnInit() {
    this.buscarRelatorio();
    this.buscarSumario();
  }

  

  buscarRelatorio() {
    axios
      .get("https://localhost:7029/api/relatorio",
      )
      .then(response => {
        this.listaRelatorio = response.data;
    });
  }
  buscarSumario() {
    axios
      .get("https://localhost:7029/api/relatorio/sumario",
      )
      .then(response => {
        this.listaSumario = response.data;
    });
  }
}





 

