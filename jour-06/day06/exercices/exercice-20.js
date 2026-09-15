/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const etudiant={
    prenom:"aissa",
    nom:"saidi",
    adress:{
        city:"berkane",
        housenumber:69
    }
}
const etudiant1=structuredClone(etudiant);//this built in function creats a new place in memory and cuts all links to the old nested object  and make a new seperate perfectly copied object
// const etudiant1={...etudiant}//it moddified evenn the original object 
  etudiant1.adress.city="Oujda"
  console.log(etudiant1.adress.city)
  console.log(etudiant.adress.city)
 
