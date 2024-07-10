import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';







@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css'],



})

export class Card5Component {

  DateSelect: string | null = null; // Variable pour stocker le choix du carburant
  KilometresSelect: string | null = null;  // Variable pour stocker le choix de la boîte de vitesses
  fabricationSelect: string | null = null;

  constructor(private sharedService: SharedService,private dataService: DataService){}
  getSelectedOption(){
    return this.sharedService.selectedOption;
  }

  getNextRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '1':
        return 'card6';
      case '2':
        return 'card6v2';
      case '3':
        return 'card6v2';
      default:
        return 'card6v2'; // Valeur par défaut
    }
  }
  getPreviousRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '1':
        return 'card4';
      case '2':
        return 'card4v2';
      case '3':
        return 'card4';
      default:
        return 'card4'; // Valeur par défaut
    }
  }

  KilometresChange() {
    this.updateData();
    
  }


  translateDate(dateString: string): string {
    // Séparer le jour, le mois et l'année
    const [day, month, year] = dateString.split('/');
    // Formater la date au format "mm.aaaa"
    return `${month}.${year}`;
  }

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    // Vérifier si DateSelect est non nul
    if (this.DateSelect !== null) {
    const translatedDate = this.translateDate(this.DateSelect);
    const newData = {
      ...existingData,
      dateMiseEnCirculation: translatedDate,// Utilisez DatePipe pour formater la date
      kilometresParcourus: this.KilometresSelect,
      anneeFabrication:this.fabricationSelect , // Formatez la date de fabrication
    };
  
    
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  } else {
    console.error("DateSelect est null. Impossible de traduire la date.");
  }
  }



  




}









