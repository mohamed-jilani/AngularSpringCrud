import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrl: './create-produit.component.css'
})
export class CreateProduitComponent implements OnInit{
  produit: Produit = new Produit();
  constructor(private produitService: ProduitService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  saveProduit(){
    this.produitService.createProduit(this.produit).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['/produits']);
  }

  onSubmit(){
    this.saveProduit();
    this.goToProduitList();
  }

}
