function infosEtudiant(nom, note) {
  let resultat;

  if (note >= 10) {
    resultat = "Admis";
  } else {
    resultat = "Ajourné";
  }

  return `${nom} : ${note}/20 → ${resultat}`;
}

console.log(infosEtudiant("Ayoube", 14));
console.log(infosEtudiant("Asmae", 8));

 