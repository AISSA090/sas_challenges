/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let utilisateurs = [];
  let compteur=0
function addutil(nom,email){

    const nouvelUtilisateur = {
    id: compteur,
    nom: nom,
    email: email
  };
  utilisateurs.push(nouvelUtilisateur)
  compteur++;
}
function trouverParEmail(email){
    for(let i=0;i<utilisateurs.length;i++){
    if(utilisateurs[i].email==email){
        return utilisateurs[i]
    }
}
 return 'utilistaeur not found'
}
function supprimerParId(id){
   for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].id === id) {
            utilisateurs.splice(i, 1);
            return;
        }
}
}
function afficherAnnuaire(){
for (let i = 0; i < utilisateurs.length; i++) {
 console.log(utilisateurs[i])
}
}