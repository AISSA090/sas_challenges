/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let joueur1="Pierre";
let joueur2="Ciseaux";
function determinergagnant(joueur1,joueur2){
    if(joueur1===joueur2){
        console.log("egaliter")
    }else if ((joueur1 === "pierre" && joueur2 === "ciseaux") ||
    (joueur1 === "ciseaux" && joueur2 === "feuille") ||
    (joueur1 === "feuille" && joueur2 === "pierre")){
        console.log("joueur1 gagne")

    }else {
        console.log("joueur 2 gagne")
    }
}
determinergagnant(joueur1,joueur2);