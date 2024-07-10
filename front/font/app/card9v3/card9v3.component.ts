import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card9v3',
  templateUrl: './card9v3.component.html',
  styleUrls: ['./card9v3.component.css']
})
export class Card9v3Component {

  selectedConsommation: string | null = null; // Variable pour stocker le choix du carburant
  selectedHistorique: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioConsommation(carburant: string) {
  this.selectedConsommation = carburant;
  this.updateData();
}

selectRadioHistorique(boite: string) {
  this.selectedHistorique = boite;
  this.updateData();
}

constructor( private dataService: DataService){}
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
