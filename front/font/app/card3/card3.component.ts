import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component {
  constructor(private sharedService: SharedService , private dataService: DataService){}
  getSelectedOption(){
    return this.sharedService.selectedOption;
  }


  getNextRoute(): string {
    const selectedOption = this.sharedService.selectedOption;
    // Utilisez la valeur de selectedOption pour déterminer le prochain itinéraire
    switch (selectedOption) {
      case '1':
        return 'card4';
      case '2':
        return 'card4v2';
      case '3':
        return 'card4';
      default:
        return 'card4'; // Valeur par défaut
    }
  }

  
  marquesEtModeles = [
    { 
      marque: 'Peugeot', 
      modeles: ['2008', '208', '508', '307', 'Partner', '3008', '301', '207', 'Boxer', '406', 'Expert', '206', '206+', '4008', '2008 GT', '5008', '308', '107'] 
    },
    { 
      marque: 'Chery', 
      modeles: ['Tiggo 2', 'Tiggo 8 Pro', 'Tiggo 3X', 'Tiggo 3', 'QQ', 'Tiggo 7 Pro'] 
    },
    { 
      marque: 'Volkswagen', 
      modeles: ['Golf 7', 'T-Cross', 'Polo', 'Golf 5', 'Tiguan', 'Golf 8', 'Amarok', 'Passat', 'Caddy', 'Käfer', 'Golf 6', 'Polo Sedan', 'Jetta', 'Touareg', 'Scirocco', 'Passat CC', 'T-roc', 'Transporter Combi 6.1'] 
    },
    { 
      marque: 'Seat', 
      modeles: ['Ibiza', 'Leon', 'Ateca', 'Leon SC', 'Arona'] 
    },
    { 
      marque: 'Haval', 
      modeles: ['H6', 'H2', 'Jolion'] 
    },
    { 
      marque: 'Ssangyong', 
      modeles: ['Actyon Sports', 'Tivoli', 'XLV'] 
    },
    { 
      marque: 'Mercedes-Benz', 
      modeles: ['Classe E', 'ML', 'CLA', 'Classe C', 'Classe A', 'GLC', 'GLC Coupé', 'Classe C coupé', 'Classe B', 'GLA', 'Classe E coupé', 'Classe GL', 'GLE Coupé', 'CLK', 'Classe S', 'Classe G'] 
    },
    { 
      marque: 'Mini', 
      modeles: ['Countryman', '3 portes', 'Cooper S', 'Coupé'] 
    },
    { 
      marque: 'Ford', 
      modeles: ['Focus', 'Fiesta', 'C-Max', 'Figo', 'Ecosport', 'Ranger', 'Focus sedan', 'Ka', 'Explorer'] 
    },
    { 
      marque: 'Fiat', 
      modeles: ['Punto Evo', '500', 'Doblo', 'Grande Punto', 'Tipo Berline', 'Fiorino', 'Siena', 'Doblo Combi', 'Doblo Maxi', 'Punto', 'Palio', '500 C', 'Ducato', '125'] 
    },
    { 
      marque: 'BMW', 
      modeles: ['Série 3', 'Série 4 Gran Coupé', 'X5', 'X1', 'Série 3 coupé', 'Série 2 Active Tourer', 'Série 1', 'Série 5', 'X6', 'Série 4 Coupé', 'X3', 'Série 2 Gran Coupé', 'X4', 'Série 7', 'X2'] 
    },
    { 
      marque: 'Chevrolet', 
      modeles: ['Cruze', 'Sonic', 'Malibu'] 
    },
    { 
      marque: 'Renault', 
      modeles: ['Fluence', 'Clio', 'Kadjar', 'Laguna', 'Captur', 'Symbol', 'Duster', 'Megane', 'Megane Sedan', 'Kwid Populaire', 'Clio Campus', 'Koleos'] 
    },
    { 
      marque: 'Nissan', 
      modeles: ['Patrol', 'Navara', 'Qashqai', 'Qashqai+2', 'Juke', 'Pathfinder'] 
    },
    { 
      marque: 'Toyota', 
      modeles: ['Aygo', 'Prado', 'Corolla', 'Yaris', 'RAV 4', 'C-HR', 'Agya', 'BZ4X', 'Yaris Sedan', 'Hilux Double Cabine', 'Land Cruiser', 'Verso'] 
    },
    { 
      marque: 'Tata', 
      modeles: ['Xenon X2 Simple Cabine'] 
    },
    { 
      marque: 'KIA', 
      modeles: ['Sportage', 'Picanto', 'Rio 5p', 'Cerato', 'Rio Berline', 'Sorento', 'Picanto Populaire', "Cee'd", 'Niro Hybride'] 
    },
    { 
      marque: 'Audi', 
      modeles: ['A4', 'A3 Berline', 'A3 Sportback', 'A5 Sportback', 'Q5', 'A6', 'Q3', 'Q2', 'Q7', 'TT', 'A5 Coupé', 'A5 Cabriolet', 'RS Q3'] 
    },
    { 
      marque: 'Mitsubishi', 
      modeles: ['Mirage', 'L200 Double Cabine', 'Pajero'] 
    },
    { 
      marque: 'Hyundai', 
      modeles: ['Tucson', 'Accent', 'Grand i10', 'Grand i10 Sedan', 'i20', 'i10', 'Kona', 'Solaris', 'Grand Santa Fe', 'Centennial', 'Veloster', 'Tucson Hybride', 'Genesis'] 
    },
    { 
      marque: 'MG', 
      modeles: ['ZS', 'GT', '5', '6', 'GS'] 
    },
    { 
      marque: 'Opel', 
      modeles: ['Antara', 'Corsa', 'Astra GTC', 'Astra', 'Adam', 'Corsa 3p'] 
    },
    { 
      marque: 'Citroën', 
      modeles: ['DS3', 'C3', 'C4 Cactus', 'C4', 'C3 Aircross', 'C-Elysée', 'C1', 'Berlingo Utilitaire', 'C5 Aircross', 'Berlingo Multispace', 'C5', 'DS5', 'Jumpy Fourgon'] 
    },
    { 
      marque: 'Mahindra', 
      modeles: ['KUV 100', 'XUV 300'] 
    },
    { 
      marque: 'Geely', 
      modeles: ['GC6'] 
    },
    { 
      marque: 'Alfa Romeo', 
      modeles: ['Mito', 'Giulietta'] 
    },
    { 
      marque: 'Suzuki', 
      modeles: ['Celerio Populaire', 'Vitara', 'Swift', 'Celerio', 'Baleno', 'Dzire', 'SJ Samurai', 'Jimny'] 
    },
    { 
      marque: 'Great Wall', 
      modeles: ['M4', 'Poer'] 
    },
    { 
      marque: 'Lancia', 
      modeles: ['Ypsilon'] 
    },
    { 
      marque: 'Mazda', 
      modeles: ['3 sedan', '2', '3', '2 Sedan', '6', 'CX-9', 'CX-5'] 
    },
    { 
      marque: 'Dacia', 
      modeles: ['Dokker Van', 'Sandero Stepway', 'Duster', 'Sandero'] 
    },
    { 
      marque: 'Honda', 
      modeles: ['CR-V', 'City', 'Accord'] 
    },
    { 
      marque: 'Skoda', 
      modeles: ['Octavia', 'Kamiq', 'Fabia'] 
    },
    { 
      marque: 'Jeep', 
      modeles: ['Renegade', 'Compass', 'Wrangler'] 
    },
    { 
      marque: 'Cupra', 
      modeles: ['Leon', 'Formentor'] 
    },
    { 
      marque: 'DFSK', 
      modeles: ['K01H'] 
    },
    { 
      marque: 'Porsche', 
      modeles: ['Cayenne', 'Panamera', 'Macan', 'Cayenne Coupé'] 
    },
    { 
      marque: 'Iveco', 
      modeles: ['Daily Fourgon', 'Daily Double Cabine'] 
    },
    { 
      marque: 'Land Rover', 
      modeles: ['Discovery Sport', 'Range Rover Velar', 'Range Rover Sport', 'Range Rover Evoque', 'Defender 110', 'Freelander', 'Range Rover', 'Discovery'] 
    },
    { 
      marque: 'Jaguar', 
      modeles: ['XF', 'XJ', 'XE', 'F-Pace'] 
    },
    { 
      marque: 'Abarth', 
      modeles: ['500'] 
    },
    { 
      marque: 'Tesla', 
      modeles: ['Model 3'] 
    },
    { 
      marque: 'Lada', 
      modeles: ['Niva'] 
    },
    { 
      marque: 'Smart', 
      modeles: ['ForTwo'] 
    },
    { 
      marque: 'Infiniti', 
      modeles: ['FX'] 
    },
    { 
      marque: 'BAIC YX', 
      modeles: ['Kenbo S2'] 
    },
    { 
      marque: 'Volvo', 
      modeles: ['S60', 'XC40', 'S80'] 
    },
    { 
      marque: 'DS', 
      modeles: ['5', '7 Crossback'] 
    },
    { 
      marque: 'Dongfeng', 
      modeles: ['S50', 'AX4'] 
    },
    { 
      marque: 'Isuzu', 
      modeles: ['D-Max Double Cabine'] 
    },
    { 
      marque: 'Wallyscar', 
      modeles: ['Iris'] 
    },
    { 
      marque: 'Dodge', 
      modeles: ['RAM'] 
    }
  ];

  marqueSelect: string | null = null;
  modeleSelect: string | null = null;
  modelesAffiches: string[] = [];

  onMarqueChange() {
    this.modelesAffiches = this.marquesEtModeles.find(item => item.marque === this.marqueSelect)?.modeles || [];
    this.updateData();
 
    console.log(this.dataService.getData());

  }

  onModeleChange() {
    this.updateData();
    console.log(this.dataService.getData());
  }


  updateData() {
    const existingData = this.dataService.getData();
    const data = {
      ...existingData,
      marque: this.marqueSelect,
      modele: this.modeleSelect,
      
    };
    this.dataService.updateData(data);
  }

  getDonnees(): any {
    return this.dataService.getData();
  }
  

}


