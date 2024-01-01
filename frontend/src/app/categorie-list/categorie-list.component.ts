import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrl: './categorie-list.component.css'
})
export class CategorieListComponent implements OnInit{
  categories: Categorie[] = [];

  constructor(
    private categorieService: CategorieService,
    private router: Router
  ){
  }
  ngOnInit(): void {
    this.getCategories();
  }
  private getCategories(){
    this.categorieService.getAllcategories().subscribe(data => {
      this.categories = data;
    });
  }

  updateCategorie(id: number){
    this.router.navigate(['update-categorie', id]);
  }
  deleteCategorie(id: number){
    const isConfirmed = window.confirm('Are you sure you want to delete this Categorie?');
    if (isConfirmed) {
      this.categorieService.deleteCategorie(id).subscribe( data => {
        console.log(data);
        this.getCategories();
      })
    }

  }

}
