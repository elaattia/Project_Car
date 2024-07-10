import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card12v3',
  templateUrl: './card12v3.component.html',
  styleUrls: ['./card12v3.component.css']
})
export class Card12v3Component {

  selectedRoue: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioRoue(carburant: string) {
  this.selectedRoue = carburant;
  this.updateData();
}
constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    Rouedesecours:this.selectedRoue,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}
}
