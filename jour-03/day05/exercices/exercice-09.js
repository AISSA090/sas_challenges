/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let numbers=[1, 2, 3, 4, 5, 6]
let  tabpair=[]
function pair(oldtab,newtab){
 for(let i=0;i<oldtab.length;i++){
    if(oldtab[i]%2===0){
        newtab.push(oldtab[i])
    }
}
return newtab;
}
console.log(pair(numbers,tabpair))