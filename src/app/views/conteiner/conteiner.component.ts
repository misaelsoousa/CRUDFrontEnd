import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConteinerCreateModalComponent } from 'src/app/components/conteiner-create-modal/conteiner-create-modal.component';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})

export class ConteinerComponent implements OnInit {
  constructor(private modalService: MdbModalService) {}


  

  listaConteineres = null;

  listaClientes = null;

  modalRef: MdbModalRef<ConteinerCreateModalComponent> | null = null;

  createModalShow = false;

  numero = "";
  cliente = "";
  tipo = "";
  status = "";
  categoria = "";

  editCliente = "";
  editNumero = "";
  editTipo = "";
  editStatus = "";
  editCategoria = "";

  ngOnInit() {
    this.buscarConteineres();
    this.buscarClientes();
  }
  

  filtrarConteineres() {
    this.buscarConteineres(null, this.numero, this.cliente, this.tipo, this.status, this.categoria);
  }

  buscarConteineres(id:any = null , numero:any = null, cliente:any = null, tipo:any = null, status:any = null, categoria:any = null) {
    console.log("Valor de cliente:", cliente);
    axios
      .get("https://localhost:7029/api/conteiner",
        {
          params: {
            id,
            numero,
            cliente,
            tipo,
            status,
            categoria
          }
        }
      )
      .then(response => {
        this.listaConteineres = response.data;
    });
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

  deleteItem(idConteiner: any) {
    axios.delete(`https://localhost:7029/api/conteiner/${idConteiner}`)
      .then(response => {
        console.log("Conteiner deletado com sucesso");
        // Atualize a lista após a exclusão
        this.buscarConteineres();
      })
      .catch(error => {
        console.error("Erro ao excluir o Conteiner: ", error);
      });
  }

  abrirModalCriarConteiner() {
    this.modalRef = this.modalService.open(ConteinerCreateModalComponent);
  }

  habilitarEdicao(conteiner:any) {
    this.editCliente = conteiner.nomeCliente;
    this.editNumero = conteiner.numero;
    this.editTipo = conteiner.tipo;
    this.editStatus = conteiner.status;
    this.editCategoria = conteiner.categoria;
  
    conteiner.edit = true;
  }
  
  desabilitarEdicao(conteiner:any) {
    conteiner.edit = false;
  }
  editarConteiner(conteiner:any, cliente:any) {
    var data = {
      id: conteiner.id,
      numero:this.editNumero,
      cliente:this.editCliente,
      tipo:this.editTipo,
      status:this.editStatus,
      categoria:this.editCategoria,
    }
    axios.put(`https://localhost:7029/api/conteiner`, data)
    .then((response) => {
      alert("Editado com sucesso!");
      this.buscarConteineres();
      this.buscarClientes();
    }
    )
    
    conteiner.edit = false;
  }
  

  deletarConteiner(id:  any) {
    const confirmacao = window.confirm("Você tem certeza disso?");
    if (confirmacao){
    axios
    .delete(`https://localhost:7029/api/conteiner?id=${id}`)
    .then(response => {
        console.log(`Movimento com ID ${id} foi deletado com sucesso.`);
        this.buscarClientes();
      })
      .catch(error => {
        console.error(`Erro ao deletar movimento com ID ${id}`, error);
      });
    }
  }
  
}
