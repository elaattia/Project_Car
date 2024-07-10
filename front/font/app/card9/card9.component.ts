import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
import {HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import de Observable depuis RxJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card9',
  templateUrl: './card9.component.html',
  styleUrls: ['./card9.component.css']
})
export class Card9Component   {

  
  constructor(private router: Router, private sharedService: SharedService, private dataService: DataService) { }
  getSelectedOption(){
    return this.sharedService.selectedOption;
  }

 

  Carrosserie =['SUV/4x4', 'Berline', 'Citadine', 'Pick up', 'Autres', 'Coupé',
  'Compacte', 'Monospace', 'Utilitaire', 'Cabriolet']
  selectedTransmission: string | null = null;
  selectedcylindre: string | null = null;
  selectedCarrosserie: string | null = null;
  selectedPuissancefiscale: string | null = null;

  selectRadioTransmission(option: string): void {
    this.selectedTransmission = option;
    this.updateData();
  }

  navigateToPrevious(event: string): void {

    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate(['event']);
  }


  
  


 

 

 

  
  estimez() {
    const data = this.dataService.getData(); // Obtenez les données du service
    console.log('Données à envoyer:', data); // Affichez les données dans la console pour vérification

    // Appelez la méthode sendData() du service pour envoyer les données au backend
    this.dataService.sendData(data).subscribe(response => {
      console.log('Données envoyées avec succès:', response); // Affichez la réponse du backend dans la console
      this.dataService.prixEstime=response.price[0];
      console.log('prixEstimer=',this.dataService.prixEstime)
      // Traitez la réponse du backend si nécessaire
      // Naviguer vers la route 'estimez' après avoir reçu la réponse du backend
      this.router.navigate(['estimez']);
      
    }, error => {
      console.error('Erreur lors de l\'envoi des données:', error); // Affichez les erreurs dans la console
      // Traitez les erreurs si nécessaire
    });

    
    
  }

  getPreviousRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '1':
        return 'card8'
      case '2':
        return 'card11v2';
      case '3':
        return 'card18v3';
      default:
        return 'card18v3'; // Valeur par défaut
    }










  }

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      Transmission:this.selectedTransmission,
      cylindre:this.selectedcylindre,
      Carrosserie:this.selectedCarrosserie,
      Puissancefiscale:this.selectedPuissancefiscale,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }
}
