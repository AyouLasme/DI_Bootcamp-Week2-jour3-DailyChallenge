//nous utilisons repeat pour répéter le caractère # autant de fois que nécessaire pour créer chaque ligne du triangle.
const triangle = 5;
let etoileAffichee = "";
for (let i = 0; i < triangle; i++) {
  etoileAffichee = etoileAffichee.concat("*");
  console.log(etoileAffichee);
}

// deux boucles for imbriquées
const triangle1 = 5;
for (let j = 0; j < triangle1; j++) {
  let etoileAffichee1 = "";
  for (let k = 0; k < j+1; k++) {
    etoileAffichee1 = etoileAffichee1.concat("*"); 
  }
  console.log(etoileAffichee1);
}
