import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card7v2',
  templateUrl: './card7v2.component.html',
  styleUrls: ['./card7v2.component.css']
})
export class Card7v2Component {

  selectedConsommation: string | null = null;

  selectRadioConsommation(option: string): void {
    this.selectedConsommation = option;
    this.updateData();
  }
  selectedHistorique: string | null = null;

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
      Consommation:this.selectedConsommation,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }



}
