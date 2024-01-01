import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "./produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/api/v1/produits';
  constructor(private httpClient: HttpClient) { }

  getAllProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`${this.baseUrl}`);
  }

  createProduit(produit: Produit): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, produit);
  }

  getProduitById(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(`${this.baseUrl}/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, produit);
  }

  deleteProduit(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
