import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import axios from 'axios';

@Component({
  selector: 'app-movimento-create-modal',
  templateUrl: './movimento-create-modal.component.html',
  styleUrls: ['./movimento-create-modal.component.css']
})
export class MovimentoCreateModalComponent {

  constructor(public modalRef: MdbModalRef<MovimentoCreateModalComponent>) { }

  listaConteineres = null;


  conteiner = ""
  tipo = ""
  dataini = ""
  datafim = ""

  ngOnInit() {
    this.buscarConteineres();
  }

  cadastrarMovimento(){
    var data = {
      conteiner:this.conteiner,
      tipo:this.tipo,
      dataini:this.dataini,
      datafim:this.datafim
    }
    axios.post(
      "https://localhost:7029/api/movimento", data
    ).then((response) => {
      alert(response.data);
      this.modalRef.close()
    }
    )
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

 

}
