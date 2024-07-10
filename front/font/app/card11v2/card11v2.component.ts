import { Component ,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card11v2',
  templateUrl: './card11v2.component.html',
  styleUrls: ['./card11v2.component.css']
})
export class Card11v2Component implements OnInit{

 
  
  constructor(private router:Router ,private dataService: DataService){
  }
  
  ngOnInit(): void {
    
  }
  

  selectedavant: string | null = null; // Variable pour stocker le choix du carburant
  selectedarriere: string | null = null;// Variable pour stocker le choix de la boîte de vitesses

selectRadioavant(carburant: string) {
  this.selectedavant = carburant;
  this.updateData();
}

selectRadioarriere(boite: string) {
  this.selectedarriere = boite;
  this.updateData();
}


  updateData() {
    // Obtenir les données existantes du service
    const existingData = this.dataService.getData();
    const newData = {
      ...existingData,
      pneusavant:this.selectedavant,
      pneusarriere:this.selectedarriere,
     
      
    };
    // Mettre à jour les données dans le service
    this.dataService.updateData(newData);
    console.log(this.dataService.getData());
  }
}
