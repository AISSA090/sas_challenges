/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * EXTRACTION DE NOM DE DOMAINE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend une adresse email (ex: "contact@youcode.ma") et retourne uniquement le domaine ("youcode.ma"). *Indice : Combinez indexOf et slice ou utilisez split.*
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day04/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let phrase="contact@youcode.ma"

function returningdomaine(phrase){
    let index = 0;
    let newword = "";
    for(let i = phrase.length - 1; i >= 0; i--){
        if(phrase[i] == "@"){
            index = i;
            break; 
        }
    }
  
    for(let i = index + 1; i < phrase.length; i++){
       newword += phrase[i];
    }
    return newword;
}

console.log(returningdomaine(phrase));