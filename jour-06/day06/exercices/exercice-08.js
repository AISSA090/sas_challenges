/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const candidat={
    nom:["aissa","oussama","younes","akram","ismail"],
    score:[1200,1500,1900,700,1800]
}
function bestscore(obj,key,key2){
    let max=0
    let winnerindex=0
    for( let i=0;i<obj[key].length;i++){
        if (obj[key][i]>max){
             max=obj[key][i]
             winnerindex=i
        }
    }
    return obj[key2][winnerindex]
}
console.log(bestscore(candidat,"score","nom"))