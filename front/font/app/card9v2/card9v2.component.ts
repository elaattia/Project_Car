import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card9v2',
  templateUrl: './card9v2.component.html',
  styleUrls: ['./card9v2.component.css']
})
export class Card9v2Component {

  selectedExterieur: string | null = null;

  selectRadioExterieur(option: string): void {
    this.selectedExterieur = option;
    this.updateData();
  }
  selectedpneus: string | null = null;

  selectRadiopneus(option: string): void {
    this.selectedpneus = option;
    this.updateData();
  }

  constructor( private dataService: DataService){}
  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      Exterieur:this.selectedExterieur,
      etatdespneus:this.selectedpneus,
      
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }

}
