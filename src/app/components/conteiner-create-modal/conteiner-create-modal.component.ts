import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import axios from 'axios';
import { IConfig } from 'ngx-mask'

@Component({
  selector: 'app-conteiner-create-modal',
  templateUrl: './conteiner-create-modal.component.html',
  styleUrls: ['./conteiner-create-modal.component.css']
})
export class ConteinerCreateModalComponent {
  constructor(public modalRef: MdbModalRef<ConteinerCreateModalComponent>) { }

  listaClientes = null;

  cliente = ""
  numero = ""
  tipo = ""
  status = ""
  categoria = ""

  ngOnInit() {
    this.buscarClientes();
  }

  cadastrarConteiner(){
    var data = {
      cliente: this.cliente,
      numero: this.numero,
      tipo: this.tipo,
      status: this.status,
      categoria: this.categoria
    }
    axios.post(
      "https://localhost:7029/api/conteiner", data
    ).then((response) => {
      alert(response.data);
      this.modalRef.close()
    }
    )
  }

  buscarClientes(id:any = null , nome:any = null, cnpj:any = null, cep:any = null, contato:any = null) {
    axios
      .get("https://localhost:7029/api/cliente",
        {
          params: {
            id,
            nome,
            cnpj,
            cep,
            contato
          }
        }
      )
      .then(response => {
        this.listaClientes = response.data;
    });
  }

  public inputFieldValue: string = '';

  
}
