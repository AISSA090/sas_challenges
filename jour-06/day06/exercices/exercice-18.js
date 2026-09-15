/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const utilisateur1={
  nom:"Aissa",
  age:21,
  estAdmin:false

}
const utilisateur2={
  nom:"Aissa",
  age:21,
  estAdmin:false

}
function sontIdentiques(obj1, obj2){
let tab1=Object.keys(obj1)
let tab2=Object.keys(obj2)
let tab11=Object.values(obj1)
let tab22=Object.values(obj2)
if(tab1.length!=tab2.length){
    return false
}
for(let i=0;i<tab1.length;i++){
    if((tab1[i]!=tab2[2])&&(tab11[i]!=tab22[i])){
        return false
    }
}
return true
}
console.log(sontIdentiques(utilisateur1,utilisateur2))