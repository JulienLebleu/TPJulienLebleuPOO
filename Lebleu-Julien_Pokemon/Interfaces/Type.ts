export default interface Type {
  _degats: number;
  
  //Calcul degats contre un type feu
  attaquerDegatsFeu();

  //Calcul degats contre un type eau
  attaquerDegatsEau();

  //Calcul degats contre un type Plante
  attaquerDegatsPlante();
}
