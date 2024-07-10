import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card14v3',
  templateUrl: './card14v3.component.html',
  styleUrls: ['./card14v3.component.css']
})
export class Card14v3Component {

  selectedsuspensions: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadiosuspensions(carburant: string) {
  this.selectedsuspensions = carburant;
  this.updateData();
}
selectedfreins: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadiofreins(carburant: string) {
  this.selectedfreins = carburant;
  this.updateData();
}

constructor(private dataService: DataService){}
updateData() {
  // Obtenir les données existantes du service
  const existingData = this.dataService.getData();
  const newData = {
    ...existingData,
    suspension:this.selectedsuspensions,
    freins:this.selectedfreins,
   
   
    
  };
  // Mettre à jour les données dans le service
  this.dataService.updateData(newData);
  console.log(this.dataService.getData());
}
}
