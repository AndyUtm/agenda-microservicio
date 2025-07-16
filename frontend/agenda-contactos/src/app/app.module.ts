import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // 👈 agregado
import { FormsModule } from '@angular/forms';             // 👈 agregado

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ContactosComponent } from './components/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // 👈 agregado
    FormsModule        // 👈 agregado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

