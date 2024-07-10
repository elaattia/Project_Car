import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card7v3',
  templateUrl: './card7v3.component.html',
  styleUrls: ['./card7v3.component.css']
})
export class Card7v3Component {

  selectedExterieur: string | null = null; // Variable pour stocker le choix du carburant
  selectedInterieur: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioExterieur(carburant: string) {
  this.selectedExterieur = carburant;
  this.updateData();
}

selectRadioInterieur(boite: string) {
  this.selectedInterieur = boite;
  this.updateData();
}

constructor(private dataService: DataService){}

  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      Exterieur:this.selectedExterieur,
      Interieur:this.selectedInterieur,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }




}
