import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card15v3',
  templateUrl: './card15v3.component.html',
  styleUrls: ['./card15v3.component.css']
})
export class Card15v3Component {

  selectedmoteur: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadiomoteur(carburant: string) {
  this.selectedmoteur = carburant;
  this.updateData();
}
selecteddirection: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadiodirection(carburant: string) {
  this.selecteddirection = carburant;
  this.updateData();
}

constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    moteur:this.selectedmoteur,
    systemededirection:this.selecteddirection,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}

}
