/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function ceaser(text ,decalage){
    let codedtext=""
    let codedindex=0
    for(let i=0;i<text.length;i++){
        if(text[i]==" "){
         codedtext+=" "
        }else{
          let index=text.charCodeAt(i)
          codedindex=(((index)-65+decalage)%26)+65
          codedtext+=String.fromCharCode(codedindex)
        }
    }
    return codedtext
}
