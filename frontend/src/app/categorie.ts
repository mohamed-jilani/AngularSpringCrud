export class Categorie {
    id!: number;
    description: string;
    
  constructor(
    description: string = ''
  ) {
        this.description = description;
    }
}
 