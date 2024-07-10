import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import de Observable depuis RxJS

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://127.0.0.1:8000/new/'; // Remplacez par l'URL de votre API Django
  private apiUrl1 = 'http://127.0.0.1:8000/test/'; 
  //private  data ={"marque":"Chery","modele":"Tiggo 8 Pro","carburant":"Essence","boite":"Manuelle","dateMiseEnCirculation":"27.2022 ","kilometresParcourus":4444,"anneeFabrication":"04/26/2024","etat":"neuf","accident":"non","proprietaires":"1","entretien":"Entretien régulier maison","Consommation":"Consommation normale","Exterieur":"","Interieur":"","etatdespneus":"Excellent","Circuitvehicule":"","Transmission":"Propulsion","cylindre":2000,"Carrosserie":"Coupé","Matiere":"","Nombredecles":"","pneusavant":"","pneusarriere":"","Rouedesecours":"","tableaudebord":"","suspension":"","freins":"","moteur":"","systemededirection":"","fonctionnementboite":"","climatisation":"","voitureappartient":"","Utilisationprecedente":"","importe":"","Puissance_fiscale":7}

  
  constructor(private http: HttpClient) { }
  
  marque: string = '';
  modele: string = '';
  carburant: string = '';
  boite: string = '';
  dateMiseEnCirculation:string='00.0000';
  kilometresParcourus:number=0;
  anneeFabrication:string='';
  etat:string='';
  accident:string='';
  proprietaires:string='';
  entretien:string='';
  Consommation:string='';
  Exterieur:string='';
  Interieur:string='';
  etatdespneus:string='';
  Circuitvehicule:string='';
  Transmission:string='';
  cylindre:number=0;
  Carrosserie:string='';
  Matiere:string='';
  Nombredecles:string='';
  pneusavant:string='';
  pneusarriere:string='';
  Rouedesecours:string='';
  tableaudebord:string='';
  suspension:string='';
  freins:string='';
  moteur:string='';
  systemededirection:string='';
  fonctionnementboite:string='';
  climatisation:string='';
  voitureappartient:string='';
  Utilisationprecedente:string='';
  importe:string='';
  Puissancefiscale:number=0;

 
  getData() {
    return {
      marque: this.marque,
      modele: this.modele,
      carburant: this.carburant,
      boite: this.boite,
      dateMiseEnCirculation: this.dateMiseEnCirculation,
      kilometresParcourus: this.kilometresParcourus,
      anneeFabrication: this.anneeFabrication,
      etat: this.etat,
      accident: this.accident,
      proprietaires: this.proprietaires,
      entretien: this.entretien,
      Consommation: this.Consommation,
      Exterieur:this.Exterieur,
      Interieur:this.Interieur,
      etatdespneus:this.etatdespneus,
      Circuitvehicule:this.Circuitvehicule,
      Transmission:this.Transmission,
      cylindre:this.cylindre,
      Carrosserie:this.Carrosserie,
      Matiere:this.Matiere,
      Nombredecles:this.Nombredecles,
      pneusavant:this.pneusavant,
      pneusarriere:this.pneusarriere,
      Rouedesecours:this.Rouedesecours,
      tableaudebord:this.tableaudebord,
      suspension:this.suspension,
      freins:this.freins,
      moteur:this.moteur,
      systemededirection:this.systemededirection,
      fonctionnementboite:this.fonctionnementboite,
      climatisation:this.climatisation,
      voitureappartient:this.voitureappartient,
      Utilisationprecedente:this.Utilisationprecedente,
      importe:this.importe,
      Puissancefiscale:this.Puissancefiscale,
    };
  }
  
  updateData(data: any) {
    this.marque = data.marque || '';
    this.modele = data.modele || '';
    this.carburant = data.carburant || '';
    this.boite = data.boite || '';
    this.dateMiseEnCirculation=data.dateMiseEnCirculation||'';
    this.kilometresParcourus=data.kilometresParcourus||'';
    this.anneeFabrication=data.anneeFabrication||'';
    this.etat=data.etat||'';
    this.accident=data.accident||'';
    this.proprietaires=data.proprietaires||'';
    this.entretien= data.entretien||'';
    this.Consommation= data.Consommation||'';
    this.Exterieur= data.Exterieur||'';
    this.Interieur= data.Interieur||'';
    this.etatdespneus= data.etatdespneus||'';
    this.Circuitvehicule= data.Circuitvehicule||'';
    this.Transmission= data.Transmission||'';
    this.cylindre= data.cylindre||'';
    this.Carrosserie= data.Carrosserie||'';
    this.Matiere= data.Matiere||'';
    this.Nombredecles= data.Nombredecles||'';
    this.pneusavant= data.pneusavant||'';
    this.pneusarriere= data.pneusarriere||'';
    this.Rouedesecours= data.Rouedesecours||'';
    this.tableaudebord= data.tableaudebord||'';
    this.suspension= data.suspension||'';
    this.freins= data.freins||'';
    this.moteur= data.moteur||'';
    this.systemededirection= data.systemededirection||'';
    this.fonctionnementboite= data.fonctionnementboite||'';
    this.climatisation= data.climatisation||'';
    this.voitureappartient= data.voitureappartient||'';
    this.Utilisationprecedente= data.Utilisationprecedente||'';
    this.importe= data.importe||'';
    this.Puissancefiscale= data.Puissancefiscale||'';
    // Vous pouvez également appeler ici une méthode pour mettre à jour le prix estimé en fonction des nouvelles données
  }

  prepareDataForSending(data: any): string {
    // Convertir les données en format JSON
    const jsonData = JSON.stringify(data);
    return jsonData;
  }
  //public data=this.prepareDataForSending(this.getData())

   // Méthode pour envoyer les données JSON au backend
   sendData(data: any): Observable<any> {
    console.log('Envoi des données au backend :', data); // Ajoutez un log pour afficher les données envoyées
    // Convertir les données en format JSON
  const jsonData = this.prepareDataForSending(data);
  console.log('jsonData:', jsonData);
  const csrfToken = 'KilwkxqDha3RB7eL4svDbnHj8VMQ6kEW'	|| ''; // Utilisation d'une valeur par défaut si le jeton CSRF est undefined
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
    })
  };
  

    // Envoi de la requête POST avec les données JSON au backend
    return this.http.post<any>(this.apiUrl, data,httpOptions);
    
  }  

  getEstimatedPrice(): Observable<any> {
    const url = this.apiUrl + '/test'; // Remplacez 'votre-endpoint-pour-recuperer-le-prix' par l'URL de votre endpoint Django pour récupérer le prix
    return this.http.get<any>(url);
  }

  prixEstime: number=0;










   
 
}





