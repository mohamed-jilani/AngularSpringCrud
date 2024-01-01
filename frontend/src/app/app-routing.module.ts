import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },

  { path: 'categories', component: CategorieListComponent },
  { path: 'create-categorie', component: CreateCategorieComponent },
  { path: 'update-categorie/:id', component: UpdateCategorieComponent },

  { path: 'produits', component: ProduitListComponent },
  { path: 'create-produit', component: CreateProduitComponent },
  { path: 'update-produit/:id', component: UpdateProduitComponent },

  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
