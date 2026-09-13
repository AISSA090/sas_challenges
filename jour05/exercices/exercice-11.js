/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR D'ACRONYME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir de la phrase "Hyper Text Markup Language", retournez "HTML".
 * Indice : Découpez en mots, bouclez, prenez la première lettre de chaque mot, mettez en majuscule, et rejoignez le tout.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day04/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let phrase="Hyper Text Markup Language"
let alllower="abcdefghijklmnopqrstuvwxyz"
function firstletter(phrase,alllower){
    let tab = phrase.split(" ");
    let word=""
    
    for(let i = 0; i < tab.length; i++){
     let words=tab[i];
       if (alllower.includes(words[0])) {
         word+=String.fromCharCode(words.charCodeAt(0)-32)
         
       } else{
        word+=words[0]
       }
    }
  return word
}
console.log(firstletter(phrase,alllower))