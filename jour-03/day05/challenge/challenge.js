/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let panier = [101, 105, 101, 102]
let tableau=[]
function ajouterAuPanier(tableau,tab,index){
    tab.push(tableau[index]) 
    return tab   
}
function retirerDuPanier(tab,index){
    tab.splice(index,1)
    return tab

}


function calculerDoublons(tab) {
    let article2 = []; 

    for (let i = 0; i < tab.length; i++) {
        let article = tab[i];
        let seen = false;
        for (let j = 0; j < article2.length; j++) {
            if (article2[j] === article) { 
                seen = true;
                break; 
            }
        }
        if (seen === false) {
            let compteur = 1; 

            for (let j = i + 1; j < tab.length; j++) {
                if (article === tab[j]) { 
                    compteur++; 
                }
            }
            
            console.log("L'article " + article + " est présent " + compteur + " fois.");
            
            article2.push(article);
        }
    }
}
calculerDoublons(panier);