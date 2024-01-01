export class Produit {
    id!: number;
    prix: number;
    description: string;
    categorieId: number;

  constructor(
    prix: number = 0,
    description: string = '',
    categorieId: number = 0,
  ) {
        this.prix = prix;
        this.description = description;
        this.categorieId = categorieId;
    }
}
 