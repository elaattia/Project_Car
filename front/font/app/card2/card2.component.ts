import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
  
})
export class Card2Component {
 
  selectedOption: string = ''; // Ajoutez la propriété selectedOption ici
  selectRadio(value: string) {
    this.selectedOption = value; // Assurez-vous que selectedOption est défini dans votre composant
    this.SharedService.selectedOption = value;
  }

  constructor(private SharedService: SharedService) { }

  onRadioButtonChange(option: string) {
    this.SharedService.selectedOption = option;
  }
  
}
