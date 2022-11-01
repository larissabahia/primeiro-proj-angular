import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({ //declaration serve p registrar componentes, pipes, diretivas e outras estruturas

  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  imports: [ // imports serve para registrar outros modulos dentro de outro modulo
  //serve exclusivamente p outros modulos
    BrowserModule
  ],
  providers: [],//providers serve p registrar serviços e interceptadores http
  bootstrap: [AppComponent]
})
export class AppModule { }
