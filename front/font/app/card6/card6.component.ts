import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component {

  selectedaccidente: string | null = null;
  selectedetat: string | null = null;

  selectRadioaccidente(option: string): void {
    this.selectedaccidente = option;
    this.updateData();
  }
  constructor(private dataService: DataService){}


  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      etat: this.selectedetat, 
      accident: this.selectedaccidente,
      
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }

}
