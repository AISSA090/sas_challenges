/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EMAIL
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un email et retourne true s'il contient le caractère "@".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day04/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let email="aissa.saidi308@gmail.com"
function checkemail(email){
    let flag=false
    let arobase="@"
    if (email.includes(arobase)){
      flag= true
    }else{
        return flag
    }
    return  flag
}
console.log(checkemail(email))