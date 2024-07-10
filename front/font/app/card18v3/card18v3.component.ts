import { Component ,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card18v3',
  templateUrl: './card18v3.component.html',
  styleUrls: ['./card18v3.component.css']
})
export class Card18v3Component implements OnInit{

 
  
  constructor(private router:Router ,private dataService: DataService){
  }
  
  ngOnInit(): void {
    
  }
  navigateToPrevious(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate(['card17v3']);
  }
  estimez(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate(['estimez']);
  }

  selectedvehicule: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadiovehicule(carburant: string) {
  this.selectedvehicule = carburant;
  this.updateData();
}

updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    importe:this.selectedvehicule,

   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}

}

