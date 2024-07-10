import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card17v3',
  templateUrl: './card17v3.component.html',
  styleUrls: ['./card17v3.component.css']
})
export class Card17v3Component {

  selectedappartient: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioappartient(carburant: string) {
  this.selectedappartient = carburant;
  this.updateData();
}
selectedutilisation: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioutilisation(carburant: string) {
  this.selectedutilisation = carburant;
  this.updateData();
}

constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    voitureappartient:this.selectedappartient,
    Utilisationprecedente:this.selectedutilisation,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}
}
