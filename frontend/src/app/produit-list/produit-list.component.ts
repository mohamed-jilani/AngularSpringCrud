import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrl: './produit-list.component.css'
})
export class ProduitListComponent implements OnInit{
  produits: Produit[] = [];

  constructor(
    private produitService: ProduitService,
    private router: Router
  ){
  }
  ngOnInit(): void {
    this.getProduits();
  }
  private getProduits(){
    this.produitService.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }

  updateProduit(id: number){
    this.router.navigate(['update-produit', id]);
  }
  deleteProduit(id: number){
    const isConfirmed = window.confirm('Are you sure you want to delete this Produit?');
    if (isConfirmed) {
      this.produitService.deleteProduit(id).subscribe( data => {
        console.log(data);
        this.getProduits();
      })
    }

  }

}
