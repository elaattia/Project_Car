import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card6v2',
  templateUrl: './card6v2.component.html',
  styleUrls: ['./card6v2.component.css']
})
export class Card6v2Component { 
  constructor(private sharedService: SharedService, private dataService: DataService){}
  getSelectedOption(){
    return this.sharedService.selectedOption;
  }

  getNextRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '2':
        return 'card7v2';
      case '3':
        return 'card7v3';
      default:
        return 'card7v3'; // Valeur par défaut
    }
  }
  selectedaccidente: string | null = null;
  selectedetat: string | null = null;
  selectedNombre: string | null = null;

  selectRadioaccidente(option: string): void {
    this.selectedaccidente = option;
    this.updateData();
  }

  
  

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      etat: this.selectedetat, 
      accident: this.selectedaccidente,
      proprietaires:this.selectedNombre,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }
}
