import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-precedent',
  templateUrl: './precedent.component.html',
  styleUrls: ['./precedent.component.css']
})
export class PrecedentComponent implements OnInit {
  @Input() previousRoute: string='';
  @Input() nextRoute: string='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPrevious(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    
    // Naviguer vers le composant précédent
    // Utilisation de la fonction goBack() pour revenir à la page précédente
    this.router.navigate([this.previousRoute]);
  }

  navigateToNext(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Naviguer vers le composant suivant
    this.router.navigate([this.nextRoute]);
  }
 
}
