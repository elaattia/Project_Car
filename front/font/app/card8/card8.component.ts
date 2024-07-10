import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card8',
  templateUrl: './card8.component.html',
  styleUrls: ['./card8.component.css']
})
export class Card8Component implements OnInit{

 
  
  constructor(private router:Router, private dataService: DataService ){
  }
  
  ngOnInit(): void {
    
  }
  
  selectedConsommation: string | null = null;

  selectRadioConsommation(option: string): void {
    this.selectedConsommation = option;
    this.updateData();
  }
  selectedpneus: string | null = null;

  selectRadiopneus(option: string): void {
    this.selectedpneus = option;
    this.updateData();
  }



  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      etatdespneus:this.selectedpneus,
      Consommation:this.selectedConsommation,
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }

}
