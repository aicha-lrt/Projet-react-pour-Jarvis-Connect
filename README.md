# PROJET SITE WEB EN REACT - JARVIS CONNECT

L'objectif de ce projet est de **réaliser un site Web en React.js pour un restaurant**.

## I - Initialisation du projet

Le site Web contient un total de **4 pages** différentes :
- La page **Accueil** représentant la première page sur laquelle l'utilisateur va tomber. Elle contient une petite introduction au site, une petite description de l'établissement ainsi qu'une mise en avant des spécialités du restaurant, pour donner au client l'envie de commander.
- La page **La Carte** qui donne un aperçu du menu du restaurant à l'utilisateur, tout en lui permettant de passer commande. Le client peut trier les plats par catégorie et gérer la quantité de chaque plat qu'il souhaite commander.
- La page **Contact** qui contient les coordonnées, les réseaux sociaux et la localisation du restaurant. De plus, un aperçu Google Maps est disponible afin que le client puisse repérer l'emplacement du restaurant.
- La page **Panier** où l'utilisateur peut avoir un aperçu des plats qu'il a commandé et imprimer/télécharger son bon de commande. Il peut également gérer les plats commandés, en les supprimant ou en augmentant leur quantité.

Pour réaliser ce projet, je me suis servie de :
- **Vite**, qui m'a offert un environnement de développement et un serveur local rapide, me permettant d'optimiser plus efficacement mon application Web
- Les **Hooks** de React.js (`useState`), qui m'ont permis de gérer le panier de commande et les quantités en temps réel
- **React Router**, qui a rendu très fluide la navigation entre les pages de l'application en transformant le site multipages en SPA (Single Page Application, comme si ce n'était qu'une seule page contenant tout le site)
- **Tailwind CSS**, qui m'a permis de gérer l'apparence du site de manière plus efficace et optimiser la taille finale de mon fichier CSS
- **Visual Studio Code**, qui me permet d'écrire du code de manière efficace et propre tout en ayant un bon visuel dessus

<p> Le projet adopte une structure **composant**. C'est une structure de React qui permet de créer des morceaux de codes réutilisables partout dans l'application (tels que la barre de navigation, ou encore le footer). Cela permet de mieux organiser les fichiers qui composent l'application Web, tout en gardant une bonne cohérence visuelle. </p>
<p> Le design du site Web a été pensé de manière responsive afin de pouvoir y accéder facilement depuis n'importe quel appareil. L'interface s'adapte ainsi automatiquement selon la largeur de l'écran. </p>
<p> Le lancement du projet s'effectue avec la commande `npm run dev`. Grâce à Vite et à la structure SPA, le navigateur n'a pas besoin de rafraîchir les pages à chaque fois qu'une donnée est modifiée, ce qui rend l'application beaucoup plus fluide et agréable d'utilisation.</p>

## II - Installation et lancement du projet

Pour faire fonctionner l'application, nous aurons besoin d'avoir **Node.js** d'installé sur l'ordinateur. Nous aurons également besoin d'utiliser `npm`, le gestionnaire de paquets de Node.js.

### Installation des dépendances

On commence par se placer dans le dossier racine qui contient tous les dossiers et fichiers du projet (pour ce projet-ci, on se placera dans *Projet-react-pour-Jarvis-Connect*). 
<br/>
On ouvre ensuite un terminal dans ce dossier, et on lance la commande `npm install`. Cette commande lira le fichier `package.json` et installera les modules nécessaires au bon fonctionnement du site.
<br/> 
Nous sommes fin prêts à lancer le serveur et avoir un aperçu du site !

### Lancement du seveur

Afin de voir le site sur le navigateur, dans le même terminal que précédemment, on lancera la commande `npm run dev`. Vite fera apparaître un URL `https://localhost:XXXX/`  dans le terminal, il suffira de cliquer dessus pour accéder au site.

<p align="center">
  <img width="467" height="264" alt="image" src="https://github.com/user-attachments/assets/2ffddb40-df34-4322-9bfc-e7fad0640504" />
</p>

Le serveur est désormais lancé, et le site est accessible !
<br/>
*Pour fermer le serveur, il faudra appuyer sur les touches `CTRL` + `C` dans le terminal. Cela éteindra le serveur, et le site ne sera ainsi plus accessible (jusqu'à ce que le serveur soit de nouveau initialisé)*

## III - Défis rencontrés et solutions 

<p>Avant de commencer le projet, j'ai rendu visite au gérant du restaurant sur lequel je devait faire mon site. Je voulais qu'il me donne des indications sur ce qu'il attendrait d'un site Web à l'image de son restaurant (pages, aspect visuel), mais il a refusé de coopérer.
<br/> En ce qui concerne le menu du site, j'ai dû construire ma base de données sur Uber Eats et Deliveroo. Malheureusement, tous les plats n'avaient pas d'images. De ce fait, certaines images proviennent du restaurant, tandis que d'autres proviennent de divers sites internet.</p>

<p>Au cours du développement du site Web, j'ai été confrontée à quelques petits défis, que ce soit au niveau de l'aspect du site ou de l'optimisation de certaines fonctionnalités.</p>

### La gestion de l'état dynamique du panier

L'objectif était de trouver un moyen de faire communiquer les pages entre elles afin que le panier soit toujours à jour. Par exemple, en ajoutant un plat au panier, le compteur de la barre de navigation s'incrémenterait (indiquant qu'un nouveau plat a été ajouté) et resterait à jour peu importe la page sur laquelle l'utilisateur serait.
<br/> Pour ce faire, j'ai utilisé le **State Lifting**. Au lieu de stocker les informations dans une seule page, j'ai placé l'état du panier dans le composant `App.jsx` afin que ces informations puissent être lues par tous les autres composants sans soucis, et qu'elle apparaisse sur les autres pages.

### La navigation responsive

L'objectif était de faire en sorte que chaque page soit lisible peu importe la largeur d'un écran. Cependant, les menus de la barre de navigation disparaissaient si l'écran devenait trop petit (de la largeur d'un téléphone).
<br/> J'ai ainsi mis en place un **menu hamburger** qui n'apparaîtrait que sous certaines conditions. J'ai utilisé un état react `isOpen` qui permettrait d'afficher ou masquer un menu sur mobile. De plus, grâce aux classes `hidden md:flex` de Tailwind CSS, j'ai pu faire en sorte que le menu déroulant se déroule à la vertical sur mobile (au lieu d'être horizontal, comme sur ordinateur).

<p align="center">
  <img width="609" height="364" alt="image" src="https://github.com/user-attachments/assets/674d5787-fa5e-4212-8cb8-3f9c70202bfc" />
</p>

## Conclusion

A titre personnel, ce projet a été une expérience très enrichissante. J'ai approfondi ma maîtrise de la bibliothèque React, et j'ai pu découvrir un nouveau framework Tailwind CSS. Je conclus ce projet avec la satisfaction d'avoir créé un site opérationnel pour un petit restaurant italien. 

## Annexe : Historique du développement

Afin de me repérer dans mon projet, j'ai mis en place un fichier dans lequel je notais toutes les modifications que j'effectuais au fur et à mesure de la création de mon site. En voici un aperçu.

```
// DEBUT //
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
Compléter menu.js pour ajouter les menus et catégories manquants, et mettre à jour les images
Home.jsx: ajouter l'image d'un plat qui change toutes les 10 secondes en dessous de l'accroche + ajouter description du restaurant (voir l'autre fichier txt) + éventuellement faire une présentation des plats italiens servis dans le restaurant (ou le faire ailleurs)
Contact.jsx: mettre à jour l'aperçu google maps, l'adresse, le tel et les horaires + ajouter le mail + ajouter les réseaux sociaux (fb) + ajouter une photo du restaurant
Faire en sorte qu'on puisse gérer la quantité dans le panier (et peut-être aussi dans menu.jsx)
Footer: ajouter les réseaux sociaux et modifier les informations et horaires
Revoir le CSS (titres par exemple)
Rendre l'application responsive (accessible sur mobile)
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
menu.js: compléter la carte, modifier les catégories et les images
Télécharger les images restantes pour les plats qui n'en ont pas
Home.jsx: modifier le texte de la description (voir 2e fichier txt)
Menu.jsx: modifier les textes du glossaire (notamment le 2e et le 4e)
Contact.jsx: modifier l'adresse mail, le lien facebook, l'adresse, le téléphone et le iframe google maps
Footer.jsx: modifier l'adresse mail, le lien facebook, l'adresse, le téléphone et le iframe google maps
Revoir quelques parties du CSS
Navbar responsive
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
```







