import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MovimentoCreateModalComponent } from 'src/app/components/movimento-create-modal/movimento-create-modal.component';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.css'],
  
})

export class MovimentoComponent implements OnInit{
  constructor(private modalService: MdbModalService) {}
  listaConteineres = null;
  listaMovimento = null;

  modalRef: MdbModalRef<MovimentoCreateModalComponent> | null = null;

  ngOnInit() {
    this.buscarMovimento();
    this.buscarConteineres();
  }



  conteiner = ""
  tipo = ""
  dataini = ""
  datafim = ""

  editConteiner = ""
  editTipo = ""
  editDataini = ""
  editDatafim = ""

  abrirModalMovimento() {
    this.modalRef = this.modalService.open(MovimentoCreateModalComponent);
  }

  buscarMovimento(id:any = null , conteiner:any = null, tipo:any = null, dataini:any = null, datafim:any = null) {
    axios
      .get("https://localhost:7029/api/movimento",
        {
          params: {
            id,
            conteiner,
            tipo,
            dataini,
            datafim
          }
        }
      )
      .then(response => {
        this.listaMovimento = response.data;
    });
  }

  filtrarMovimento() {
    this.buscarMovimento(null, this.conteiner, this.tipo, this.dataini, this.datafim);
  }

  buscarConteineres(id:any = null , numero:any = null, cliente:any = null, tipo:any = null, status:any = null, categoria:any = null) {
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

  deletarMovimento(id:  any) {
    const confirmacao = window.confirm("Você tem certeza disso?");
    if (confirmacao){
    axios
    .delete(`https://localhost:7029/api/movimento?idMovimento=${id}`)
    .then(response => {
        console.log(`Movimento com ID ${id} foi deletado com sucesso.`);
        this.buscarMovimento();
      })
      .catch(error => {
        console.error(`Erro ao deletar movimento com ID ${id}`, error);
      });
    }
  }

  habilitarEdicao(movimento:any) {
    this.editConteiner = movimento.numero;
    this.editTipo = movimento.tipo;
    this.editDataini = movimento.dataIni;
    this.editDatafim = movimento.dataFim ;
  
    movimento.edit = true;
  }
  
  desabilitarEdicao(movimento:any) {
    movimento.edit = false;
  }
  editarMovimento(movimento:any) {
    var data = {
      id: movimento.id,
      conteiner:this.editConteiner,
      tipo:this.editTipo,
      dataIni:this.editDataini,
      dataFim:this.editDatafim,
    }
    axios.put(`https://localhost:7029/api/movimento`, data)
    .then((response) => {
      alert("Editado com sucesso!");
      this.buscarConteineres();
      this.buscarMovimento();
    }
    )
    
    movimento.edit = false;
  }
  
}
