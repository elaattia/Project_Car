import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card7',
  templateUrl: './card7.component.html',
  styleUrls: ['./card7.component.css']
})
export class Card7Component {

  selectedHistorique: string | null = null;
  selectedNombre: string | null = null;

  selectRadioHistorique(option: string): void {
    this.selectedHistorique = option;
    this.updateData();
  }


  constructor(private dataService: DataService){}

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      entretien:this.selectedHistorique,
      proprietaires:this.selectedNombre,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }


}
