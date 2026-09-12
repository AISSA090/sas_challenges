/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function genererMotDePasse(longueur) {
  let x = 4;
  const characters = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  if (x > longueur) {
    console.log("Erreur!!");
    return -1; 
  }
  let password = "";

  for (let i = 0; i < longueur; i++) {
    const random = Math.random();
    const randomindex = Math.floor(random * characters.length);
    password += characters[randomindex];
  }
  
  let pass = password.split("");
  let switches = 0;
  while (switches < x) {
    const random = Math.random();
    const randomindex = Math.floor(random * pass.length);
    if (pass[randomindex] !== "A") {
      pass[randomindex] = "A"; 
      switches++; 
    }
  }

  return pass.join("");
}
console.log(genererMotDePasse(10));