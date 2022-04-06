import Pokeball from "./Pokeball";

export class Dresseur {
  _nom: string;
  _pokeballs!: Pokeball[];

  constructor(nom: string) {
    this._nom = nom;
  }

  //Permet d'ajouter des pokeballs au dresseur
  ajouterPokeballs(nombre: number): void {
    let nbPokeball = 0;
    if (this._pokeballs != null) {
      nbPokeball = this._pokeballs.length + nombre;
      console.log("Vous avez ajouté " + nombre + " pokeball sur vous, vous possedez donc " + this._pokeballs.length + "pokeball.");
    }
  }

  //affiche tout les pokemons que le dresseur a
  getPokemons(): void {
    let cpt = 0;
    if (this._pokeballs != null) {
      this._pokeballs.forEach((pokeball) => {
        cpt ++;
        console.log("Pokeball numéro" + cpt + ":"+ pokeball._contient._nom +", type: "+ pokeball._contient._type + ", pv: "+ pokeball._contient._pv +"/"+ pokeball._contient._pvMax)
      });
    } else {
      console.log("Vous n'avez aucune pokeballs");
    }
  }
}