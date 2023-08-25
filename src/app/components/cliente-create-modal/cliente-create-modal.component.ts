import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import axios from 'axios';

@Component({
  selector: 'app-cliente-create-modal',
  templateUrl: './cliente-create-modal.component.html',
  styleUrls: ['./cliente-create-modal.component.css']
})
export class ClienteCreateModalComponent {
  constructor(public modalRef: MdbModalRef<ClienteCreateModalComponent>) {

  }

  listaClientes = null;

  nome = ""
  cnpj = ""
  cep = ""
  contato = ""
  
  cadastrarCliente(){
    var data = {
      nome:this.nome,
      cnpj:this.cnpj,
      cep:this.cep,
      contato:this.contato,
    }
    axios.post(
      "https://localhost:7029/api/cliente", data
    ).then((response) => {
      alert(response.data);
      this.modalRef.close()
      this.buscarClientes()
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
}
