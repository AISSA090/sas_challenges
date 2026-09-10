/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let numbers=[1,12,2,7,3,8,11]
let min=numbers[0]
let max=numbers[0]
function minim(min){
for (let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length-1;j++){
        if(numbers[i]<=min){
            min=numbers[i];
        }
       
   
}
}
return min
}
function MAXIMUM(max){
for (let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length-1;j++){
        if(numbers[i]>=max){
            max=numbers[i];
        }
    }
}
return max ;
}
console.log(minim(min) +" this is the minimum")
console.log(MAXIMUM(max)+" this is the maximum")