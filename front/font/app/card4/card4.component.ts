import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component {

  selectedCarburant: string | null = null; // Variable pour stocker le choix du carburant
selectedBoite: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

constructor( private dataService: DataService){}

selectRadioCarburant(carburant: string) {
  this.selectedCarburant = carburant;
  this.updateData();
  console.log(this.dataService.getData());
}

selectRadioBoite(boite: string) {
  this.selectedBoite = boite;
  this.updateData();
  console.log(this.dataService.getData());
}
  
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    carburant: this.selectedCarburant,
    boite: this.selectedBoite
  };

  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
}

}
