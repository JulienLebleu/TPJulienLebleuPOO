import Type from "../Interfaces/Type";

export default class TypeFeu implements Type {
  _degats: number;

  constructor(degats: number) {
    this._degats = degats;
  }

  //Indique les dégats eau par rapport au type
  attaquerDegatsEau(): number {
    return (this._degats / 2);
  }

  //Indique les dégats feu par rapport au type
  attaquerDegatsFeu(): number {
    return (this._degats / 2);
  }

  //Indique les dégats plante par rapport au type
  attaquerDegatsPlante(): number {
    return (this._degats * 2);
  }
}
