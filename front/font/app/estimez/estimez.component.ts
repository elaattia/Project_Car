import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-estimez',
  templateUrl: './estimez.component.html',
  styleUrls: ['./estimez.component.css']
})
export class EstimezComponent implements OnInit{

  prixEstime: number| null = null; // Propriété pour stocker le prix estimé
  csrfToken: string | undefined;
 
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    // Récupérer le prixEstime à partir du service DataService
    this.prixEstime = this.dataService.prixEstime;
  }
  
 
}
