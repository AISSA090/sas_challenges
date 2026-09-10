/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let doublons=[1, 2, 2, 3, 4, 4, 5]
let tab=[];
function tableaudoublons(tableau,newtab){
for (let i=0;i<tableau.length;i++){
    let exists=false
   for(let j=i+1;j<tableau.length;j++){
        if(tableau[i]==tableau[j]){
            exists= true
            break
        }  
        
    }
    if (exists==false){
            newtab.push(tableau[i])
        }
    
}
return newtab;
}
console.log(tableaudoublons(doublons,tab))