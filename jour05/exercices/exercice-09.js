/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Remplacez le mot "idiot" par "*" dans la phrase : "Ne sois pas idiot, réfléchis avant de parler.".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day04/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let phrase = "Ne sois pas idiot, réfléchis avant de parler.";

function changeridiot(phrase){
    let tab = phrase.split(" "); 
    let word = "idiot";
    
    for(let i = 0; i < tab.length; i++){
        if(tab[i].includes(word)){
            tab[i] = tab[i].replace(word, "*");
        }
    }
   return tab.join(" ");
}
console.log(changeridiot(phrase)); 