import { Component ,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card11v3',
  templateUrl: './card11v3.component.html',
  styleUrls: ['./card11v3.component.css']
})
export class Card11v3Component implements OnInit{

 
  
  constructor(private router:Router ,private dataService: DataService){
  }
  
  ngOnInit(): void {
    
  }
  navigateToPrevious(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate(['card10v2']);
  }
  estimez(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate(['estimez']);
  }

  selectedavant: string | null = null; // Variable pour stocker le choix du carburant
  selectedarriere: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioavant(carburant: string) {
  this.selectedavant = carburant;
  this.updateData();
}

selectRadioarriere(boite: string) {
  this.selectedarriere = boite;
  this.updateData();
}

updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    pneusavant:this.selectedavant,
    pneusarriere:this.selectedarriere,
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}
}
