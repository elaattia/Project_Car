import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card13v3',
  templateUrl: './card13v3.component.html',
  styleUrls: ['./card13v3.component.css']
})
export class Card13v3Component {

  selectedEtat: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioEtat(carburant: string) {
  this.selectedEtat = carburant;
  this.updateData();
}

constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    tableaudebord:this.selectedEtat,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}
}
