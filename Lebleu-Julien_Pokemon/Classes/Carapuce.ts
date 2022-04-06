import Pokemon from "../Interfaces/Pokemon";
import TypeEau from "./TypeEau";

export default class Carapuce extends TypeEau implements Pokemon {
  _nom: string;
  _pv: number;
  _pvMax: number;
  _type: string;
  _horsJeu: boolean;
  _captif: boolean;

  constructor(pvMax: number, degats: number) {
    super(degats);
    this._nom = "Carapuce";
    this._type = "Eau";
    this._pv = pvMax;
    this._pvMax = pvMax;
    this._horsJeu = false;
    this._captif = false;
  }

  //subit l'attaque d'un autre pokemon et enlève des pv
  subirAttaque(degats: number): void {
    if (this._horsJeu === false) {
      this._pv -= degats;
      console.log(
        this._nom +" a pris "+ degats +" dégats, il lui reste "+ this._pv + " pv"
      );
    } else {
      console.log(
        this._nom +" a pris "+ degats +" dégats, il lui reste "+ this._pv + " pv"
      );
    }
  }

  
   attaquer(cible: Pokemon): number {
    let degats: number = 0;
    switch (cible._type) {
      case "Feu":
        degats = this.attaquerDegatsFeu();
        // cible.subirAttaque(degats)
        return degats;
      case "Eau":
        degats = this.attaquerDegatsEau();
        // cible.subirAttaque(degats)
        return degats;
      case "Plante":
        degats = this.attaquerDegatsPlante();
        // cible.subirAttaque(degats)
        return degats;
    }
    return degats;
  }
  
  //soigner les pv du pokémon
  soigner(): void {
    this._pv = this._pvMax;
    console.log(this._nom + "a été soigné");
  }

  //Renomme le pokémon
  renommer(nom: string): void {
    this._nom = nom;
    console.log("Le nouveau nom de votre Pokemon est: " + this._nom);
  }
}
