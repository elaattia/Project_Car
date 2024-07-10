import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
  
})
export class Card1Component implements OnInit{

  selectedEtat: string | null = null;

  selectRadioEtat(option: string): void {
    this.selectedEtat = option;
  }
  constructor(private router:Router ){
  }
  
  ngOnInit(): void {
    
  }
  navigateToNext(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Naviguer vers le composant suivant
    this.router.navigate(['card2']);
  }

  

}
