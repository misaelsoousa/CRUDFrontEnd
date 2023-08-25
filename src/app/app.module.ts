import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConteinerComponent } from './views/conteiner/conteiner.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { MovimentoComponent } from './views/movimento/movimento.component';
import { ConteinerCreateModalComponent } from './components/conteiner-create-modal/conteiner-create-modal.component';
import { RelatorioComponent } from './views/relatorio/relatorio.component';
import { ClienteCreateModalComponent } from './components/cliente-create-modal/cliente-create-modal.component';
import { MovimentoCreateModalComponent } from './components/movimento-create-modal/movimento-create-modal.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

const appRoutes: Routes = [
  { path: 'conteiner', component: ConteinerComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'movimento', component: MovimentoComponent },
  { path: 'relatorio', component: RelatorioComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConteinerComponent,
    ClienteComponent,
    MovimentoComponent,
    ConteinerCreateModalComponent,
    RelatorioComponent,
    ClienteCreateModalComponent,
    MovimentoCreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MdbModalService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
