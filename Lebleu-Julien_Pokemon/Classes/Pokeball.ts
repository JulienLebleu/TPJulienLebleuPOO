import Pokemon from "../Interfaces/Pokemon";
import { Dresseur } from "./Dresseur";

// Classe de ma pokeball
export default class Pokeball {
  _contient!: Pokemon;
  _proprietaire!: Dresseur;

  //Affiche les info de la pokeball
  getContenu(): void {
    if (this._contient != null) {
      console.log("La pokeball contient : " + this._contient + ". Elle appartient à : " + this._proprietaire);
    } else {
      console.log("La pokeball est vide.\nEt elle appartient à : " + this._proprietaire);
    }
  }

  //On affecte le pokemon
  affecterPokemon(cible: Pokemon): Pokemon {
    return (this._contient = cible);
  }

  //On affecte un propriétaire
  affecterDresseur(proprietaire: Dresseur): Dresseur {
    return (this._proprietaire = proprietaire);
  }
}
