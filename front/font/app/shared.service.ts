import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  

  selectedOption: string = ''; // Initialisez la valeur à une chaîne vide
  constructor() { }
}
