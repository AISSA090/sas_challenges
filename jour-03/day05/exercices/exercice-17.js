/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tableau=["pomme", "banane", "pomme", "orange", "banane", "pomme"]
let newtab=[];
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
function comparertab(tab,oldtab){
    for(let i=0;i<tab.length;i++){
      let counter=0;
      for(let j=0;j<oldtab.length;j++){
        if(tab[i]==oldtab[j]){
            counter++;
        }
      }
     console.log(tab[i] + " appears " + counter + " times.");
    }
    
    

}  
