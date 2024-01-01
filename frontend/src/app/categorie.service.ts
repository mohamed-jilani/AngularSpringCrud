import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "./categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:8080/api/v1/categories';
  constructor(private httpClient: HttpClient) { }

  getAllcategories(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.baseUrl}`);
  }

  createCategories(categorie: Categorie): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, categorie);
  }

  getCategorieById(id: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.baseUrl}/${id}`);
  }

  updateCategorie(id: number, categorie: Categorie): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, categorie);
  }

  deleteCategorie(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}