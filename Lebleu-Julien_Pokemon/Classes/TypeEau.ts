import Type from "../Interfaces/Type";

export default class TypeEau implements Type {
  _degats: number;

  constructor(degats: number) {
    this._degats = degats;
  }

  //Sert a indiquer les dégats eau par rapport au type
  attaquerDegatsEau(): number {
    return (this._degats * 1);
  }

  //Indique les dégats feu par rapport au type
  attaquerDegatsFeu(): number {
    return (this._degats * 2);
  }
  
  //Indique les dégats plante par rapport au type
  attaquerDegatsPlante(): number {
    return (this._degats / 0.5);
  }
}
