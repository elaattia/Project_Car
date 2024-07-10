import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card10v3',
  templateUrl: './card10v3.component.html',
  styleUrls: ['./card10v3.component.css']
})
export class Card10v3Component {

  selectedMatiere: string | null = null; // Variable pour stocker le choix du carburant
  selectedNombre: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioMatiere(carburant: string) {
  this.selectedMatiere = carburant;
  this.updateData();
}

selectRadioNombre(boite: string) {
  this.selectedNombre = boite;
  this.updateData();
}

constructor( private dataService: DataService){}
  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      Matiere:this.selectedMatiere,
      Nombredecles:this.selectedNombre,
     
      
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }
}
