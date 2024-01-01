import { Component, OnInit } from '@angular/core';
import {Categorie} from "../categorie";
import {CategorieService} from "../categorie.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrl: './create-categorie.component.css'
})
export class CreateCategorieComponent  implements OnInit{

  categorie: Categorie = new Categorie(); 
  constructor(private categorieService: CategorieService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  saveCategorie(){
    //send employee to backend
    this.categorieService.createCategories(this.categorie).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
  }
  goToCategorieList(){
    //navigate back to employee list
    this.router.navigate(['/categories']);
  }

  onSubmit(){
    this.saveCategorie();
    this.goToCategorieList();
  }

}
