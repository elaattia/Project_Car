export class Quiz {
    Marque: string;
    Modèle: string;
    Puissance_fiscale: number;
    Transmission: string;
    Kilométrage: number;
    mise_en_circulation: number;
    Carrosserie: string;
    cylindre: number;
    Énergie: string;

    constructor(
        Marque: string,
        Modèle: string,
        Puissance_fiscale: number,
        Transmission: string,
        Kilométrage: number,
        mise_en_circulation: number,
        Carrosserie: string,
        cylindre: number,
        Énergie: string
    ) {
        this.Marque = Marque;
        this.Modèle = Modèle;
        this.Puissance_fiscale = Puissance_fiscale;
        this.Transmission = Transmission;
        this.Kilométrage = Kilométrage;
        this.mise_en_circulation = mise_en_circulation;
        this.Carrosserie = Carrosserie;
        this.cylindre = cylindre;
        this.Énergie = Énergie;
    }
}