import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card4v2',
  templateUrl: './card4v2.component.html',
  styleUrls: ['./card4v2.component.css']
})
export class Card4v2Component {

  constructor(private dataService: DataService){}
  selectedCarburant: string | null = null; // Variable pour stocker le choix du carburant
selectedvitesses: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioCarburant(carburant: string) {
  this.selectedCarburant = carburant;
  this.updateData();
  console.log(this.dataService.getData());
}

selectRadiovitesses(boite: string) {
  this.selectedvitesses = boite;
  this.updateData();
  console.log(this.dataService.getData());
}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    carburant: this.selectedCarburant,
    boite: this.selectedvitesses
  };

  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
}
}
