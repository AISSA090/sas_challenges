/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MAJUSCULES ET MINUSCULES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Mettez "youcode" entièrement en majuscules, et "MAROC" entièrement en minuscules.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day04/exercices/exercice-03.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let firstnom="youcode"
let secondnom="MAROC"
function majuscule(nom){
    let newword=""
  for(let i=0;i<nom.length;i++){
    newword+=String.fromCharCode(nom.charCodeAt(i)-32)
  }
    return newword
}
function minuscules(nom){
    let newword=""
  for(let i=0;i<nom.length;i++){
    newword+=String.fromCharCode(nom.charCodeAt(i)+32)
  }
    return newword
}
console.log(majuscule(firstnom))
console.log(minuscules(secondnom))