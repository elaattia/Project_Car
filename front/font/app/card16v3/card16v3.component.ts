import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card16v3',
  templateUrl: './card16v3.component.html',
  styleUrls: ['./card16v3.component.css']
})
export class Card16v3Component {

  selectedboite: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioboite(carburant: string) {
  this.selectedboite = carburant;
  this.updateData();
}
selectedclimatisation: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioclimatisation(carburant: string) {
  this.selectedclimatisation = carburant;
  this.updateData();
}

constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    fonctionnementboite:this.selectedboite,
    climatisation:this.selectedclimatisation,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}

}
