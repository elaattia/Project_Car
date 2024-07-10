import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{PublicService} from '../services/public.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  userInfo: any;

  constructor(private router:Router,private publicService:PublicService ){
  }
  
  navigateToAuth(event: Event): void {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    this.router.navigate(['/login']);
    // Appeler la méthode pour récupérer les informations d'authentification
  this.publicService.getMessange().subscribe(data => {
    // Traiter les données d'authentification ici
    //console.log(data); // Exemple: afficher les données dans la console
    
  });
  }
  ngOnInit(): void {
    
  }
  
}
