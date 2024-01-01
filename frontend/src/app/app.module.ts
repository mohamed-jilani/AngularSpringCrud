import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {FormsModule} from "@angular/forms";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CreateCategorieComponent,
    CategorieListComponent,
    UpdateCategorieComponent,
    CreateProduitComponent,
    ProduitListComponent,
    UpdateProduitComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
