import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card8v2',
  templateUrl: './card8v2.component.html',
  styleUrls: ['./card8v2.component.css']
})
export class Card8v2Component {
  constructor(private sharedService: SharedService, private dataService: DataService){}
  getSelectedOption(){
    return this.sharedService.selectedOption;
  }

  getNextRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '2':
        return 'card9v2';
      case '3':
        return 'card9v3';
      default:
        return 'card9v3'; // Valeur par défaut
    }
  }
  getPreviousRoute(): string {
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
  selectedCircuit: string | null = null;

  selectRadioCircuit(option: string): void {
    this.selectedCircuit = option;
    this.updateData();
  }

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      Circuitvehicule:this.selectedCircuit,
      
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }

}
