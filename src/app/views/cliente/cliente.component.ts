import { Component } from '@angular/core';

import axios from 'axios';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ClienteCreateModalComponent } from 'src/app/components/cliente-create-modal/cliente-create-modal.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  constructor(private modalService: MdbModalService) {}

listaClientes = null;




modalRef: MdbModalRef<ClienteCreateModalComponent> | null = null;

createModalShow = false;

nome = "";
cnpj = "";
cep = "";
contato = "";

editId = "";
editNome = "";
editCnpj = "";
editCep = "";
editContato = "";

ngOnInit() {
  this.buscarClientes();
}


filtrarClientes() {
  this.buscarClientes(null, this.nome, this.cnpj, this.cep, this.contato);
}

buscarClientes(ClienteId:any = null , nome:any = null, cnpj:any = null, cep:any = null, contato:any = null) {
  axios
    .get("https://localhost:7029/api/cliente",
      {
        params: {
          ClienteId,
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

deletarCliente(idCliente:  any) {
  const confirmacao = window.confirm("Você tem certeza disso?");
  if (confirmacao){
  axios
  .delete(`https://localhost:7029/api/cliente?idCliente=${idCliente}`)
  .then(response => {
      console.log(`Movimento com ID ${idCliente} foi deletado com sucesso.`);
      this.buscarClientes();
    })
    .catch(error => {
      console.error(`Erro ao deletar movimento com ID ${idCliente}`, error);
    });
  }
}

abrirModalCliente() {
  this.modalRef = this.modalService.open(ClienteCreateModalComponent);
}


habilitarEdicao(cliente:any) {
  this.editNome = cliente.nome;
  this.editCnpj = cliente.cnpj;
  this.editCep = cliente.cep;
  this.editContato = cliente.contato;

  cliente.edit = true;
}

desabilitarEdicao(cliente:any) {
  cliente.edit = false;
}
editarCliente(cliente:any) {
  var data = {
    clienteId: cliente.clienteId,
    nome:this.editNome,
    cnpj:this.editCnpj,
    cep:this.editCep,
    contato:this.editContato,
  }
  axios.put(`https://localhost:7029/api/cliente`, data)
  .then((response) => {
    alert("Editado com sucesso!");
    this.buscarClientes();
  }
  )
  
  cliente.edit = false;
}


}
