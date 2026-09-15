/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * IMBRICATION COMPLEXE (NESTED OBJECTS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet entreprise qui a un nom, et une propriété employes qui est un tableau d'objets. Affichez le prénom du deuxième employé.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day06/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const entreprise={
 name:"youcode",
   employe:[
    {id:1,nom:"alice",post:"developpement "},
    {id:2,nom:"mohammed",post:"design"},
    {id:3,nom:"alice",post:"data analyst"}
  ] 
  
}
console.log(entreprise.employe[1].nom)