// Les différents plats et menus ont été récupérés sur Uber Eats et Deliveroo

export const MENU_DATA = [
  // --- MENUS ---
  {
    id: 1,
    nom: "Menu Toscane",
    prix: 14.00,
    categorie: "Menus",
    description: "Uniquement le midi. Salade mista et 1 plat au choix. Servi avec 1 dessert au choix.",
    image: "images/menu/Menus_1.jpeg"
  },
  {
    id: 2,
    nom: "Enfant 1",
    prix: 11.00,
    categorie: "Menus",
    description: "Mini pizza ou pâtes bolognaises + eau ou canette.",
    image: "images/menu/Menus_2.jpeg"
  },
  {
    id: 3,
    nom: "Enfant 2",
    prix: 11.00,
    categorie: "Menus",
    description: "Hamburger poulet + eau ou canette.",
    image: "images/menu/Menus_3.jpeg"
  },

  // --- GLI ANTIPASTI ---
  {
    id: 4,
    nom: "Salade chèvre chaude",
    prix: 15.00,
    categorie: "Gli antipasti",
    description: "Salade, chèvre, crottin de chèvre chaud et noix.",
    image: "images/menu/Gli_antipasti_4.jpeg"
  },
  {
    id: 5,
    nom: "Insalata primavera",
    prix: 17.50,
    categorie: "Gli antipasti",
    description: "Salade, tomates, mozzarella buffala, aubergines, poivrons, courgettes, thon et olives (légumes en fonction de la saison).",
    image: "images/menu/Gli_antipasti_5.jpeg"
  },
  {
    id: 6,
    nom: "Brushetta italienne",
    prix: 17.00,
    categorie: "Gli antipasti",
    description: "Tomates fraîches, tomates cerises, aïl, basilic, mozzarella, roquette",
    image: "images/menu/Gli_antipasti_6.jpeg"
  },
  {
    id: 7,
    nom: "Burrata",
    prix: 18.50,
    categorie: "Gli antipasti",
    description: "Salade, tomates, tomates cerises, basilic, huile d'olive, burrata, roquette",
    image: "images/menu/Gli_antipasti_7.jpeg"
  },
  {
    id: 8,
    nom: "Salade César",
    prix: 15.00,
    categorie: "Gli antipasti",
    description: "Salade, tomates, émincé de poulet, copeaux de parmesan.",
    image: "images/menu/Gli_antipasti_8.jpeg"
  },
  {
    id: 9,
    nom: "Salade di Ganbeni",
    prix: 18.00,
    categorie: "Gli antipasti",
    description: "Salade, avocat, crevettes, sauce cocktail",
    image: "images/menu/Gli_antipasti_9.jpeg"
  },
  {
    id: 10,
    nom: "Insalata mista",
    prix: 7.20,
    categorie: "Gli antipasti",
    description: "Salade, concombre, tomates fraîches, roquette",
    image: "images/menu/Gli_antipasti_10.jpeg"
  },
  {
    id: 11,
    nom: "Montanella caprese",
    prix: 15.50,
    categorie: "Gli antipasti",
    description: "Salade, tomates, mozzarella, basilic, huile d'olive.",
    image: "images/menu/Gli_antipasti_11.jpeg"
  },
  {
    id: 12,
    nom: "Melanzano al forno",
    prix: 14.00,
    categorie: "Gli antipasti",
    description: "Salade, aubergines, tomates, jambon, mozzarella et gratiné au four.",
    image: "images/menu/Gli_antipasti_12.jpeg"
  },

  // --- I RAVIOLI ---
  {
    id: 13,
    nom: "Ravioli al salmone",
    prix: 18.00,
    categorie: "I ravioli",
    description: "Saumon au four, sauce crème fraîche et gratiné au ricotta.",
    image: "images/menu/I_ravioli_13.jpeg"
  },
  {
    id: 14,
    nom: "Ravioli al tartufo",
    prix: 19.50,
    categorie: "I ravioli",
    description: "Fourré aux cèpes, sauce tartufo et ricotta gratiné au four.",
    image: "images/menu/I_ravioli_14.jpeg"
  },
  {
    id: 15,
    nom: "Tris di ravioli",
    prix: 19.00,
    categorie: "I ravioli",
    description: "Assortiment de raviolis, sauce crème fraîche, champignons et gratiné au ricotta.",
    image: "images/menu/I_ravioli_15.jpeg"
  },
  {
    id: 16,
    nom: "Ravioli aux cèpes",
    prix: 17.50,
    categorie: "I ravioli",
    description: "Fourré aux cèpes, sauce aux champignons, crème fraîche, ricotta gratiné au four.",
    image: "images/menu/I_ravioli_16.jpeg"
  },
  {
    id: 17,
    nom: "Tortellini champignon",
    prix: 17.90,
    categorie: "I ravioli",
    description: "(jambon ou poulet), champignons, ricotta gratiné au four.",
    image: "images/menu/I_ravioli_17.jpeg"
  },
  {
    id: 18,
    nom: "Tortellini gorgonzola",
    prix: 17.50,
    categorie: "I ravioli",
    description: "crème fraîche, noix, gorgonzola, ricotta gratiné au four.",
    image: "images/menu/I_ravioli_18.jpeg"
  },
  {
    id: 19,
    nom: "Tortellini aux fruits de mer",
    prix: 21.50,
    categorie: "I ravioli",
    description: "Fruits de mer et ricotta gratiné au four.",
    image: "images/menu/I_ravioli_19.jpeg"
  },
  {
    id: 20,
    nom: "Tortellini al basilico",
    prix: 16.90,
    categorie: "I ravioli",
    description: "Basilico, crème fraîche, ricotta gratiné au four.",
    image: "images/menu/I_ravioli_20.jpeg"
  },

  // --- I SECONDI DI PESCE ---
  {
    id: 21,
    nom: "Fritto miste",
    prix: 19.00,
    categorie: "I secondi di pesce",
    description: "Assortiment de crevettes et calamars frits et moules.",
    image: "images/menu/I_secondi_di_pesce_21.jpeg"
  },
  {
    id: 22,
    nom: "Gambas alla grilla",
    prix: 18.00,
    categorie: "I secondi di pesce",
    description: "Gambas grillées et sauce salmorigllo.",
    image: "images/menu/I_secondi_di_pesce_22.jpeg"
  },
  {
    id: 23,
    nom: "Cozze ala marinara",
    prix: 14.50,
    categorie: "I secondi di pesce",
    description: "Moules poêlées à l'huile d'olive, ail et persil.",
    image: "images/menu/I_secondi_di_pesce_23.jpeg"
  },
  {
    id: 24,
    nom: "Cozze Provençale",
    prix: 14.50,
    categorie: "I secondi di pesce",
    description: "Moules avec tomates fraîches et ail.",
    image: "images/menu/I_secondi_di_pesce_24.jpeg"
  },
  {
    id: 25,
    nom: "Cozze à la crème",
    prix: 14.50,
    categorie: "I secondi di pesce",
    description: "Moules, crème aux champignons, huile d'olive et persil.",
    image: "images/menu/I_secondi_di_pesce_25.jpeg"
  },

  // --- I SECONDI DI CARNE ---
  {
    id: 26,
    nom: "Escalope alla milanese (veau)",
    prix: 21.00,
    categorie: "I secondi di carne",
    description: "Escalope de veau panée.",
    image: "images/menu/I_secondi_di_carne_26.jpeg"
  },
  {
    id: 27,
    nom: "Escalope alla milanese (poulet)",
    prix: 18.50,
    categorie: "I secondi di carne",
    description: "Escalope de poulet panée, servi avec 1 accompagnement au choix.",
    image: "images/menu/I_secondi_di_carne_27.jpeg"
  },
  {
    id: 28,
    nom: "Escalope alla parmigiana (veau)",
    prix: 22.75,
    categorie: "I secondi di carne",
    description: "Escalope de veau, aubergine, jambon et mozzarella gratinée.",
    image: "images/menu/I_secondi_di_carne_28.jpeg"
  },
  {
    id: 29,
    nom: "Escalope alla parmigiana (poulet)",
    prix: 20.00,
    categorie: "I secondi di carne",
    description: "Escalope de poulet aubergine, jambon et mozzarella gratinée. Servi avec 1 accompagnement au choix.",
    image: "images/menu/I_secondi_di_carne_29.jpeg"
  },
  {
    id: 30,
    nom: "Escalope de la Toscane (veau)",
    prix: 19.90,
    categorie: "I secondi di carne",
    description: "Escalope de veau, jambon, mozza gratinée.",
    image: "images/menu/I_secondi_di_carne_30.jpeg"
  },
  {
    id: 31,
    nom: "Escalope de la Toscane (poulet)",
    prix: 17.50,
    categorie: "I secondi di carne",
    description: "Escalope de poulet gratinée au jambon et mozzarella.",
    image: "images/menu/I_secondi_di_carne_31.jpeg"
  },
  {
    id: 32,
    nom: "Scaloppine al gorgonzola (veau)",
    prix: 22.50,
    categorie: "I secondi di carne",
    description: "Escalope de veau sauce gorgonzola.",
    image: "images/menu/I_secondi_di_carne_32.jpeg"
  },
  {
    id: 33,
    nom: "Scaloppine al gorgonzola (poulet)",
    prix: 18.90,
    categorie: "I secondi di carne",
    description: "Escalope de poulet sauce gorgonzola. Servi avec 1 accompagnement au choix.",
    image: "images/menu/I_secondi_di_carne_33.jpeg"
  },
  {
    id: 34,
    nom: "Scaloppine Saltimbocca",
    prix: 22.75,
    categorie: "I secondi di carne",
    description: "Médaillon de veau enroulé au jambon et mozzarella.",
    image: "images/menu/I_secondi_di_carne_34.jpeg"
  },
  {
    id: 35,
    nom: "Scaloppine ai funghi (veau)",
    prix: 21.50,
    categorie: "I secondi di carne",
    description: "Escalope de veau et sauce champignons.",
    image: "images/menu/I_secondi_di_carne_35.jpeg"
  },
  {
    id: 36,
    nom: "Scaloppine ai funghi (poulet)",
    prix: 18.50,
    categorie: "I secondi di carne",
    description: "Escalope de poulet, sauce aux champignons.",
    image: "images/menu/I_secondi_di_carne_36.jpeg"
  },
  {
    id: 37,
    nom: "Scaloppine alla fiorentina",
    prix: 22.75,
    categorie: "I secondi di carne",
    description: "Escalope de veau, épinards, jambon, mozza gratinée.",
    image: "images/menu/I_secondi_di_carne_37.jpeg"
  },

  // --- PASTE ---
  {
    id: 38,
    nom: "Linguine allo scoglio",
    prix: 22.50,
    categorie: "Paste",
    description: "Tomate fraîche, moules, calamars, scampi, ail et persil.",
    image: "images/menu/Paste_38.jpeg"
  },
  {
    id: 39,
    nom: "Linguine carbonara",
    prix: 16.00,
    categorie: "Paste",
    description: "Crème fraîche, œuf et lardons.",
    image: "images/menu/Paste_39.jpeg"
  },
  {
    id: 40,
    nom: "Linguine bolognese",
    prix: 16.00,
    categorie: "Paste",
    description: "Tomate fraîche, viande hachée",
    image: "images/menu/Paste_40.jpeg"
  },
  {
    id: 41,
    nom: "Rigatoni 4 fromaggi",
    prix: 14.50,
    categorie: "Paste",
    description: "Crème fraîche et sauce aux 4 fromages.",
    image: "images/menu/Paste_41.jpeg"
  },
  {
    id: 42,
    nom: "Fettuccine al salmone",
    prix: 18.50,
    categorie: "Paste",
    description: "Crème fraîche et saumon fumé.",
    image: "images/menu/Paste_42.jpeg"
  },
  {
    id: 43,
    nom: "Fettucine al pollo",
    prix: 17.90,
    categorie: "Paste",
    description: "Crème, émincés de poulet mariné et champignons.",
    image: "images/menu/Paste_43.jpeg"
  },
  {
    id: 44,
    nom: "Linguine al tartufo",
    prix: 18.90,
    categorie: "Paste",
    description: "Crème fraîche et sauce truffée.",
    image: "images/menu/Paste_44.jpeg"
  },
  {
    id: 45,
    nom: "Rigatoni arrabiate",
    prix: 13.50,
    categorie: "Paste",
    description: "Tomate fraîche, piment, basilic et olives noires",
    image: "images/menu/Paste_45.jpeg"
  },
  {
    id: 46,
    nom: "Gnocchi al tartufo",
    prix: 18.90,
    categorie: "Paste",
    description: "Gnocchi sauce truffée",
    image: "images/menu/Paste_46.jpeg"
  },
  {
    id: 47,
    nom: "Rigatoni alla norma",
    prix: 15.00,
    categorie: "Paste",
    description: "Tomate fraîche, aubergines, mozzarella et basilic.",
    image: "images/menu/Paste_47.jpeg"
  },
  {
    id: 48,
    nom: "Fettucine prosciutti funghi",
    prix: 16.50,
    categorie: "Paste",
    description: "Crème fraîche, jambon et champignons.",
    image: "images/menu/Paste_48.jpeg"
  },
  {
    id: 49,
    nom: "Gnocchi di la toscane",
    prix: 16.90,
    categorie: "Paste",
    description: "Tomate fraîche, champignons, crème fraîche et basilic.",
    image: "images/menu/Paste_49.jpeg"
  },
  {
    id: 50,
    nom: "Linguine la toscane",
    prix: 13.50,
    categorie: "Paste",
    description: "Tomate fraîche, champignons, basilic et crème fraîche.",
    image: "images/menu/Paste_50.jpeg"
  },
  {
    id: 51,
    nom: "Rigatoni alla diavola",
    prix: 16.25,
    categorie: "Paste",
    description: "Tomates fraîches, saucisses, ail, petits pois, olives noires, poivrons.",
    image: "images/menu/Paste_51.jpeg"
  },
  {
    id: 52,
    nom: "Rigatoni al pesto",
    prix: 13.50,
    categorie: "Paste",
    description: "Crème fraîche et sauce pesto.",
    image: "images/menu/Paste_52.jpeg"
  },
  {
    id: 53,
    nom: "Linguine al tono",
    prix: 15.90,
    categorie: "Paste",
    description: "Tomate fraîche, thon, olives et câpres.",
    image: "images/menu/Paste_53.jpeg"
  },
  {
    id: 54,
    nom: "Rigatoni all'amatriciana",
    prix: 15.00,
    categorie: "Paste",
    description: "Tomate fraîche, oignons, lardons et persil.",
    image: "images/menu/Paste_54.jpeg"
  },
  {
    id: 55,
    nom: "Gnocchi Salchicha",
    prix: 18.00,
    categorie: "Paste",
    description: "Tomates fraîches, saucisses légèrement piquantes, petits pois.",
    image: "images/menu/Paste_55.jpeg"
  },

  // --- PIZZAS ---
  {
    id: 56,
    nom: "Pizza Quatro Fromaggi",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella et préparation aux 4 fromages.",
    image: "images/menu/Pizzas_56.jpeg"
  },
  {
    id: 57,
    nom: "Pizza Elisabetta",
    prix: 13.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, jambon et champignons.",
    image: "images/menu/Pizzas_57.jpeg"
  },
  {
    id: 58,
    nom: "Pizza Al Polo",
    prix: 14.50,
    categorie: "Pizzas",
    description: "Base au choix, poulet mariné, champignons et œuf.",
    image: "images/menu/Pizzas_58.jpeg"
  },
  {
    id: 59,
    nom: "Pizza Chèvre Miel",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base au choix, chèvre et miel.",
    image: "images/menu/Pizzas_59.jpeg"
  },
  {
    id: 60,
    nom: "Pizza L'Orientale",
    prix: 18.50,
    categorie: "Pizzas",
    description: "Base tomate, viande hachée merguez, poivrons, œuf et olives.",
    image: "images/menu/Pizzas_60.jpeg"
  },
  {
    id: 61,
    nom: "Pizza Toscane",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, champignons, artichaut, jambon et œuf.",
    image: "images/menu/Pizzas_61.jpeg"
  },
  {
    id: 62,
    nom: "Pizza Margherita",
    prix: 9.75,
    categorie: "Pizzas",
    description: "Base tomate et mozzarella.",
    image: "images/menu/Pizzas_62.jpeg"
  },
  {
    id: 63,
    nom: "Pizza Compagnola",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Crème fraîche, mozzarella, lardons, oignons et œuf.",
    image: "images/menu/Pizzas_63.jpeg"
  },
  {
    id: 64,
    nom: "Pizza Calzone",
    prix: 13.50,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, jambon, champignons et œuf.",
    image: "images/menu/Pizzas_64.jpeg"
  },
  {
    id: 65,
    nom: "Pizza Al Salmone",
    prix: 17.50,
    categorie: "Pizzas",
    description: "Base au choix, saumon fumé et mozzarella.",
    image: "images/menu/Pizzas_65.jpeg"
  },
  {
    id: 66,
    nom: "Pizza al tonno",
    prix: 14.90,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, thon, oignons, poivrons, olives noires",
    image: "images/menu/Pizzas_66.jpeg"
  },
  {
    id: 67,
    nom: "Pizza pescatora",
    prix: 21.50,
    categorie: "Pizzas",
    description: "Base tomate, ail et fruits de mer.",
    image: "images/menu/Pizzas_67.jpeg"
  },
  {
    id: 68,
    nom: "Pizza quatro stagioni",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, champignons, artichaut jambon et olives.",
    image: "images/menu/Pizzas_68.jpeg"
  },
  {
    id: 69,
    nom: "Pizza siliciana",
    prix: 13.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, anchois, câpres et olives.",
    image: "images/menu/Pizzas_69.jpeg"
  },
  {
    id: 70,
    nom: "Pizza Alla Norma",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base tomate, aubergine marinée à l'ail, mozzarella, parmesan",
    image: "images/menu/Pizzas_70.jpeg"
  },
  {
    id: 71,
    nom: "Pizza vegetariano",
    prix: 15.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella et légumes de saison.",
    image: "images/menu/Pizzas_71.jpeg"
  },
  {
    id: 72,
    nom: "Pizza campione",
    prix: 13.00,
    categorie: "Pizzas",
    description: "Base tomate, mozzarella, viande hachée, oignons et œuf.",
    image: "images/menu/Pizzas_72.jpeg"
  },
  {
    id: 73,
    nom: "Pizza Burrata",
    prix: 17.50,
    categorie: "Pizzas",
    description: "Base tomate, buratta, basilic, roquette",
    image: "images/menu/Pizzas_73.jpeg"
  },
  {
    id: 74,
    nom: "Pizza salchicha",
    prix: 16.90,
    categorie: "Pizzas",
    description: "Base tomates, saucisses légèrement piquantes, fraîches parfumés à l'ail",
    image: "images/menu/Pizzas_74.jpeg"
  },

  // --- HAMBURGERS ITALIENS MAISON ---
  {
    id: 75,
    nom: "Hamburger Poulet",
    prix: 14.50,
    categorie: "Burgers italiens",
    description: "Poulet mariné, provolone, légumes de saison, salade, tomates + frites maison",
    image: "images/menu/Burgers_italiens_75.jpeg"
  },
  {
    id: 76,
    nom: "Hamburger Boeuf",
    prix: 15.50,
    categorie: "Burgers italiens",
    description: "Steak haché mariné, provolone, légumes de saison, salade, tomates + frites maison",
    image: "images/menu/Burgers_italiens_76.jpeg"
  },
  {
    id: 77,
    nom: "Hamburger Veau",
    prix: 16.90,
    categorie: "Burgers italiens",
    description: "Veau sauce champignons, provolone, légumes de saison, salade, tomates + frites maison",
    image: "images/menu/Burgers_italiens_77.jpeg"
  },
  {
    id: 78,
    nom: "Formule Hamburger",
    prix: 19.50,
    categorie: "Burgers italiens",
    description: "Hamburger Poulet + canette + dessert + frites maison",
    image: "images/menu/Burgers_italiens_78.jpeg"
  },
  {
    id: 79,
    nom: "Hamburger Mixte",
    prix: 20.00,
    categorie: "Burgers italiens",
    description: "Poulet - Veau / Poulet - Boeuf, sauce champignons, légumes de saison, salade, tomates + frites maison",
    image: "images/menu/Burgers_italiens_79.jpeg"
  },

  // --- FROMAGGI ---
  {
    id: 80,
    nom: "Fromage mixte",
    prix: 11.00,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_80.jpeg"
  },
  {
    id: 81,
    nom: "Fromage chèvre",
    prix: 7.90,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_81.jpeg"
  },
  {
    id: 82,
    nom: "Fromage gorgonzola",
    prix: 7.90,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_82.jpeg"
  },
  {
    id: 83,
    nom: "Fromage Camembert",
    prix: 7.90,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_83.jpeg"
  },
  {
    id: 84,
    nom: "Fromage parmigiano",
    prix: 7.90,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_84.jpeg"
  },
  {
    id: 85,
    nom: "Fromage mozzarella",
    prix: 7.90,
    categorie: "Fromaggi",
    description: "",
    image: "images/menu/Fromaggi_85.jpeg"
  },

  // --- DESSERTS ---
  {
    id: 86,
    nom: "Tiramisu",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_86.jpeg"
  },
  {
    id: 87,
    nom: "Crème brûlée",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_87.jpeg"
  },
  {
    id: 88,
    nom: "Mousse au chocolat",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_88.jpeg"
  },
  {
    id: 89,
    nom: "Café viennois",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_89.jpeg"
  },
  {
    id: 90,
    nom: "Dessert du Jour",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_90.jpeg"
  },
  {
    id: 91,
    nom: "Café gourmand",
    prix: 6.00,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_91.jpeg"
  },
  {
    id: 92,
    nom: "Profiteroles italiennes",
    prix: 6.50,
    categorie: "Desserts",
    description: "",
    image: "images/menu/Desserts_92.jpeg"
  },

  // --- BOISSONS ---
  {
    id: 93,
    nom: "Boisson 33 cl",
    prix: 4.50,
    categorie: "Boissons",
    description: "Coca-cola, Fanta ou Oasis",
    image: "images/menu/Boissons_93.jpeg"
  },
  {
    id: 94,
    nom: "Jus de fruits",
    prix: 4.00,
    categorie: "Boissons",
    description: "Orange, Banane ou Abricot",
    image: "images/menu/Boissons_94.jpeg"
  },
  {
    id: 95,
    nom: "Coca-cola 33 cl (bouteille)",
    prix: 3.50,
    categorie: "Boissons",
    description: "Coca-cola ou Coca-cola Zero",
    image: "images/menu/Boissons_95.jpeg"
  },
  {
    id: 96,
    nom: "Eau minérale Evian 50 cl",
    prix: 4.50,
    categorie: "Boissons",
    description: "",
    image: "images/menu/Boissons_96.jpeg"
  },
  {
    id: 97,
    nom: "Eau San Pellegrino 50 cl",
    prix: 3.50,
    categorie: "Boissons",
    description: "",
    image: "images/menu/Boissons_97.jpeg"
  },
  {
    id: 98,
    nom: "Eau San Pellegrino 100 cl",
    prix: 5.00,
    categorie: "Boissons",
    description: "",
    image: "images/menu/Boissons_98.jpeg"
  },
  {
    id: 99,
    nom: "Heineken sans alcool 25 cl",
    prix: 6.00,
    categorie: "Boissons",
    description: "",
    image: "images/menu/Boissons_99.jpeg"
  }
];

export const CATEGORIES = [
  "Tous", "Menus", "Gli antipasti", "I ravioli", "I secondi di pesce", "I secondi di carne", "Paste", "Pizzas", "Burgers italiens","Fromaggi", "Desserts", "Boissons"
];