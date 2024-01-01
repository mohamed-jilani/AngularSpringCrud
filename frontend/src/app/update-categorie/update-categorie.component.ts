import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrl: './update-categorie.component.css'
})
export class UpdateCategorieComponent implements OnInit{
  id!: number;
  categorie: Categorie = new Categorie();

    constructor(
      private categorieService: CategorieService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.categorieService.getCategorieById(this.id).subscribe(data => {
        this.categorie = data;
      }, error => console.log(error));
    }
    goToCategorieList() {
      this.router.navigate(['/categories']);
    }

  onSubmit() {
    console.log(this.categorie);
    this.categorieService.updateCategorie(this.id, this.categorie).subscribe( data =>{
      this.goToCategorieList();
    }, error => console.log(error));
  }

}
