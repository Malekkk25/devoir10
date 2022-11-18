import { Categorie } from 'src/model/categorie.model';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/model/produit.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {
onChange() {
console.log(this.IdCategorie);
this.produits=this.ProduitService.RechercherParCategorie(this.IdCategorie);
}
supprimerProduit(p: Produit) {
let conf=confirm("Etes vous sur?");
if(conf)
{this.ProduitService.supprimerProduit(p);
  this.produits=this.ProduitService.RechercherParCategorie(this.IdCategorie);
}
}
produits:Produit[] | undefined;
  categories: Categorie[] | undefined;
  IdCategorie!: number;
  constructor(private ProduitService:ProduitService) { }

  ngOnInit(): void {
    this.categories=this.ProduitService.listeCategories();
    this.produits=this.ProduitService.listeProduits();
    this.produits=[];
  }


}
