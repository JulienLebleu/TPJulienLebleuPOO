// Interface Pokemons qui permet de définir tous ce qui est commun à chaque pokemon
export default interface Pokemon {
  _nom: string;
  _pv: number;
  _pvMax: number;
  _type: string;
  _captif: boolean;
  _horsJeu: boolean;
  
  //pokemon attaque un autre
  attaquer(cible: Pokemon): number;

  //pokemon subit une attaque
  subirAttaque(degats: number): void;

  //Restaure les pv du pokemon
  soigner(): void;

  //Permet de renommer le pokemon
  renommer(nom: string): void;
}
