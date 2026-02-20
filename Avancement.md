# ----------------------------------------

# \- PROJET SITE WEB - RESTAURANT TOSCANE -

# ----------------------------------------



## I/ INITIALISATION DU PROJET



Pages du site web

* Accueil

 	> plat aléatoire toutes les 10 secondes

 	> petite présentation / accroche

* Carte avec menu

 	> menus par catégorie

 	> possibilité de commander

 	> description des plats (à quoi correspondent les plats italiens proposés)

* Contact

 	> maps

 	> numéro de téléphone

 	> horaires

 	> réseaux sociaux

* Panier

 	> voire commande

 	> imprimer / télécharger commande



\########################################



## II/ MAQUETTES



\[ insérer images des maquettes ]



\########################################



## III/ MISE EN PLACE DU CODE



### A/ STRUCTURE



Projet REACT réalisé avec Vite.

Utilisation de Taiwind CSS pour le CSS.

Code rédigé sur Visual Studio Code.



* Components : Contient menu de navigation, header, footer
* Pages : Accueil, Carte, Contact, Panier
* Data : Liste des plats, menus etc



Structure SPA: site ultra fluide, le navigateur n'a pas besoin de recharger la page

Gestion d'état sur le panier: il se met à jour en temps réel peu importe la page



>> Pour lancer le projet: npm run dev





### B/ HISTORIQUE



>> Mise en place du projet via le terminal avec npm et vite. Le projet sera visible sur l'url localhost:5173

>> Ajout des dossiers component, pages et data dans le src



>> Création de data/menu.js (regroupe toutes les données sur les menus du restaurant) 



>> Création de la page App.jsx

 	> Permet de gérer la navigation entre les pages et le panier (ajout/suppression des plats)

 	> Permet de faire en sorte que le panier reste visible sur toutes les pages

>> Création de la page home.jsx

 	> Phrase de bienvenue + phrase d'accroche

 	> Bouton qui redirige vers la carte

>> Création de la page menu.jsx

 	> Permet d'afficher la carte

 	> Tri par catégories

 	> Possibilité de mettre des plats dans le panier

>> Création de la page cart.jsx

 	> Gestion du panier

 	> Permet de supprimer des plats, visualiser sa commande et l'imprimer/télécharger

 	> Affiche le prix total de la commande

>> Création de la page contact.jsx

 	> Affiche un aperçu sur google maps

 	> Coordonnées du restaurant (adresse, téléphone)

 	> Horaires du restaurant

>> Création de la barre de navigation

 	> Reste accessible à tout moment (sticky)

 	> Permet de naviguer entre les pages et d'avoir un aperçu sur le panier (et le nombre de plats dedans)

>> Création du footer

 	> Affiche petite phrase d'accroche et informations essentielles (coordonnées, horaires)

 	> Raccourcis vers les pages du site (navigation)



>> TEST: OK. Tout s'affiche correctement. Aucun bug signalé 



---

Modifications à faire:

* Compléter menu.js pour ajouter les menus et catégories manquants, et mettre à jour les images
* Home.jsx: ajouter l'image d'un plat qui change toutes les 10 secondes en dessous de l'accroche + ajouter description du restaurant (voir l'autre fichier txt) + éventuellement faire une présentation des plats italiens servis dans le restaurant (ou le faire ailleurs)
* Contact.jsx: mettre à jour l'aperçu google maps, l'adresse, le tel et les horaires + ajouter le mail + ajouter les réseaux sociaux (fb) + ajouter une photo du restaurant
* Faire en sorte qu'on puisse gérer la quantité dans le panier (et peut-être aussi dans menu.jsx)
* Footer: ajouter les réseaux sociaux et modifier les informations et horaires
* Revoir le CSS (titres par exemple)
* Rendre l'application responsive (accessible sur mobile)

---



>> Création des dossiers menu, ui et about dans assets/images/

 	> menu contient les images des plats etc

 	> ui contient les images de l'interface

 	> about contient des images du restaurant

>> Modifications sur la page home.jsx

 	> Ajout d'un bloc d'image qui présente un nouveau plat toutes les 5 secondes (avec une petite barre juste en dessous qui indique que l'image va changer, voir index.css)

 	> Ajout d'une description du restaurant un peu plus bas

>> Modifications sur menu.jsx

 	> Ajout d'un glossaire en haut de page qui permet de mieux comprendre certains termes italiens

 	> Ajout d'une gestion de la quantité lors de l'ajout au panier

>> Modifications sur cart.jsx

 	> Possibilité de voir le nombre de plats commandés

 	> Possibilité de supprimer les plats un par un (ex: si il y a 3 pizza margheritta, possibilité d'en supprimer 1 seule au lieu de supprimer les 3) en gérant la quantité de chaque plat directement

>> Modifications sur contact.jsx

 	> Ajout d'une photo du restaurant

 	> Ajout des réseaux sociaux et de l'adresse mail

>> Modifications sur footer.jsx

 	> Ajout des réseaux sociaux et de l'adresse mail

 	> Correction des horaires



>> Correction de problème: lorsque le site passait en fenêtré, un bloc noir apparaissait à droite

 	>> Explication: le css que Vite avait généré lors de la création du projet contenait "display: flex; place-items: center;" pour le body, ce qui "cassait" un peu le site une fois qu'on le mettait en fenêtré



>> Modifications sur navbar.jsx

 	> Modification des couleurs

 	> Ajout de petites icônes

 	> Changements sur la police d'écriture

>> Modifications sur footer.jsx

 	> Modification des couleurs

 	> Changements sur la police d'écriture



---

Modifications à faire:

* menu.js: compléter la carte, modifier les catégories et les images
* Télécharger les images restantes pour les plats qui n'en ont pas
* Home.jsx: modifier le texte de la description (voir 2e fichier txt)
* Menu.jsx: modifier les textes du glossaire (notamment le 2e et le 4e)
* Contact.jsx: modifier l'adresse mail, le lien facebook, l'adresse, le téléphone et le iframe google maps
* Footer.jsx: modifier l'adresse mail, le lien facebook, l'adresse, le téléphone et le iframe google maps
* Revoir quelques parties du CSS
* Navbar responsive

---



>> Modification de menu.js

 	> Les catégories correspondent désormais à celles affichées sur Uber Eats

>> Modification de menu.jsx

 	> Modification des couleurs

 	> Réarrangement de l'apparence du menu et des filtres

 	> Changements sur la police d'écriture

 	> Modification des textes du glossaire pour les adapter aux filtres

>> Modification de home.jsx

 	> Refonte de la page avec réarrangement des couleurs et des polices

 	> Avant, tout était centré et ça laissait de gros espaces blancs. Maintenant, certaines choses sont regroupées et stylisées, ce qui ne donne plus place à de gros espaces blancs sur les côtés

 	> Modification du texte de la description

>> Modification de contact.jsx

 	> Refonte avec réarrangement des couleurs et des polices

 	> Modification et réorganisation des coordonnées et du lien google maps

>> Modification de cart.jsx

 	> Refonte avec réarrangement des couleurs et des polices

 	> Ajout d'une possibilité de retourner au menu même quand le panier n'est pas vide

>> Modification de footer.jsx

 	> Modification des coordonnées

(le responsive a été géré au fur et à mesure des refontes de chaque pages)



>> TEST: OK. Tout s'affiche correctement. Toutes les données correspondent. Aucun bug signalé



>> Modification de navbar.jsx

 	> Ajout d'un menu hamburger pour les téléphones (responsive)



>> TEST: OK. Tout fonctionne :)



>> Modification des dossiers sous "assets/"

 	> Le dossier "images" a été déplacé de "assets/" à "public/"

 	> Les dossiers "ui" et "about" ont été supprimé, leur contenu a été déplacé dans "images" (modifications dans les fichiers navbar.jsx et contact.jsx effectuées en conséquent)



>> Modification de menu.js

 	> La carte du restaurant est désormais complète (sources: Uber Eats et un peu Deliveroo)

 	> Les images ont été correctement importées



>> Ajout de commentaires dans les fichiers App.jsx, home.jsx, menu.jsx, cart.jsx, contact.jsx, navbar.jsx et footer.jsx



>> Toutes les images ont été téléchargées et apparaissent désormais sur le site



// FIN //





### X/ DIFFICULTES RENCONTREES



* J'ai essayé de demander au gérant du restaurant "si vous deviez avoir un site web pour votre restaurant, quelles fonctionnalités auriez-vous aimé voir dedans?", mais il m'a renvoyé. Je lui ai également demandé s'il avait une carte de menu, mais il a répondu qu'il n'en avait pas. J'ai trouvé plusieurs menus différents sur internet, alors j'ai décidé de me débrouiller avec ce que j'ai pu trouver sur Uber Eats et Deliveroo.
* Certaines images proviennent d'internet car elles étaient manquantes sur le site d'Uber Eats.

 

