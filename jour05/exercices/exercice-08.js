/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CAPITALISATION (TITLE CASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction capitaliser(mot) qui prend "yOUcoDe" et retourne "Youcode" (seule la première lettre est en majuscule, le reste en minuscules).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';
let nom = "yOUcoDe";
function capitaliser(nom){
  let newword = "";
  let firstletter = nom.charCodeAt(0);
  if(firstletter >= 65 && firstletter <= 90){
    newword += nom[0];
  } else {
    newword += String.fromCharCode(firstletter - 32);
  }
  for(let i = 1; i < nom.length; i++){
    let current = nom.charCodeAt(i);
    if(current >= 65 && current <= 90){
      newword += String.fromCharCode(current + 32);
    } else {
      newword += nom[i];
    }
  }
  return newword;
}
console.log(capitaliser(nom)); 