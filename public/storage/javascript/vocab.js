export default function loadWords() {
    return {
    Cafe: function (lang) {
        if (lang == "en") {
            return [
                "What would you like?",
                "I would like",
                "for me",
                "a cheese sandwich",
                "and for you?",
                "chocolate ice-cream",
                "an orange juice",
                "a grilled cheese and ham sandwich",
                "chips",
                "it comes to ",
                "a mineral water",
                "a hot chocolate",
                "excuse me madam/sir",
                "here you go, thanks",
                "a pancake with sugar",
                "a tea with milk",
                "an espresso coffee",
                "today",
                "this evening",
                "this morning"
            ]
        }
        else if (lang == "fr") {
            return [
                "Vous désirez?",
                "je voudrais",
                "pour moi",
                "un sandwich au fromage",
                "et pour vous?",
                "une glace au chocolat",
                "un jus d’orange",
                "un croquemonsieur",
                "des frites",
                "ça fait",
                "une eau minérale",
                "un chocolat chaud",
                "pardon madame / monsieur",
                "voilà, merci",
                "une crêpe au sucre",
                "un thé au lait",
                "un café express",
                "aujourd’hui",
                "ce soir",
                "ce matin"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr'";
        }
    },
    Future: function (lang) {
        if (lang == "en") {
            return [
                "Where do you go at the weekend?",
                "I go to the bowling alley",
                "I go to the cinema",
                "I go to the swimming pool",
                "I go to the beach",
                "I go to the shops",
                "on Saturday mornings",
                "on Sunday afternoons",
                "on Friday evenings",
                "Do you want to go to the café?",
                "Do you want to come?",
                "today",
                "this morning",
                "this afternoon",
                "this evening/weekend",
                "What time will we meet?",
                "Let’s meet at ",
                "Yes, I want to.",
                "No, thanks.",
                "You’re joking!"
            ]
        }
        else if (lang == "fr") {
            return [
                "Où vas-tu le weekend?",
                "Je vais au bowling",
                "Je vais au cinéma",
                "Je vais à la piscine",
                "Je vais à la plage",
                "Je vais aux magasins",
                "le samedi matin",
                "le dimanche après-midi",
                "le vendredi soir",
                "Tu veux aller au café?",
                "Tu veux venir?",
                "aujourd’hui",
                "ce matin",
                "cet après-midi",
                "ce soir/weekend",
                "Rendez-vous à quelle heure?",
                "Rendez-vous à ",
                "Oui, je veux bien.",
                "Non, merci.",
                "Tu rigoles!"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Future2: function (lang) {
        if (lang == "en") {
            return [
                "normally",
                "usually",
                "on the weekends",
                "next weekend",
                "next Saturday",
                "I’m going to play football",
                "she is going to play basketball",
                "we’re going to play laser-tag",
                "you’re going to go to the zoo",
                "we’re going to go to the sports centre",
                "they’re going to eat ice-cream",
                "I’m going to eat a cake",
                "they’re going to go on a Segway tour",
                "we’re going to eat pizza",
                "they’re going to go to the cinema",
                "I love my village because",
                "I don’t like living here because",
                "it’s fun",
                "it’s boring",
                "there is"
            ]
        }
        else if (lang == "fr") {
            return [
                "normalement",
                "d’habitude",
                "le weekend",
                "le weekend prochain",
                "samedi prochain",
                "je vais jouer au foot",
                "elle va jouer au basket",
                "on va jouer au laser-tag",
                "tu vas aller au zoo",
                "nous allons aller au centre de loisirs",
                "ils vont manger une glace",
                "je vais manger un gâteau",
                "elles vont faire un tour en Segway",
                "on va manger une pizza",
                "ils vont aller au cinéma",
                "J’adore mon village parce que",
                "Je n’aime habiter pas ici parce que",
                "c’est amusant",
                "c’est ennuyeux",
                "il y a",
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Greetings: function (lang) {
        if (lang == "en") {
            return [
                "Hello",
                "Hi",
                "What’s your name?",
                "My name is",
                "How are you?",
                "I’m (very) well.",
                "Not bad, thanks.",
                "Not well!",
                "And you?",
                "Bye",
                "See you later!",
                "Do you have brothers and sisters?",
                "Yes. I have",
                "a brother",
                "a sister",
                "a half/step brother",
                "(two) brothers",
                "(three) half/step sisters",
                "I don’t have any brother or sister.",
                "I am an only child."
            ]
        }
        else if (lang == "fr") {
            return [
                "Bonjour",
                "Salut",
                "Comment t’appelles-tu?",
                "Je m’appelle",
                "Comment ça va?",
                "Ça va (très) bien.",
                "Pas mal, merci.",
                "Ça ne va pas!",
                "Et toi?",
                "Au revoir",
                "À plus!",
                "As-tu des frères et sœurs?",
                "Oui. J’ai ",
                "un frère",
                "une sœur",
                "un demi-frère",
                "(deux) frères",
                "(trois) demi-sœurs",
                "Je n’ai pas de frères et sœurs",
                "Je suis fils / fille unique"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Opinions: function (lang) {
        if (lang == "en") {
            return [
                "Do you like?",
                "I like ",
                "I don’t like ",
                "He likes ",
                "She likes ",
                "Sport ",
                "Football",
                "Biking ",
                "School",
                "Cinema ",
                "Fish",
                "Dancing ",
                "Music",
                "Pizzas",
                "Snakes",
                "Ice creams ",
                "Video games ",
                "Holidays",
                "Comic books ",
                "Manga ",
                "Spiders ",
                "And ",
                "But ",
                "Also",
                "Nice",
                "Great ",
                "Modern ",
                "Sad ",
                "Rubbish ",
                "Old fashioned"
            ]
        }
        else if (lang == "fr") {
            return [
                "Tu aimes? ",
                "J’aime ",
                "Je n’aime pas ",
                "Il aime",
                "Elle aime",
                "Le sport",
                "Le foot",
                "Le vélo",
                "Le collège",
                "Le cinéma",
                "Le poisson",
                "La danse",
                "La musique",
                "Les pizzas",
                "Les serpents",
                "Les glaces",
                "Les jeux videos",
                "Les vacances",
                "Les BDs",
                "Les mangas",
                "Les araignées",
                "Et",
                "Mais",
                "Aussi",
                "Génial",
                "Sympa",
                "Moderne ",
                "Triste",
                "Nul",
                "Démodé"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Paris: function (lang) {
        if (lang == "en") {
            return [
                "I go / am going",
                "you go / are going",
                "he goes / is going",
                "she goes / is going",
                "we go / are going",
                "we go / are going",
                "you go / are going",
                "they go / are going",
                "they go / are going",
                "what are you going to do in Paris?",
                "to visit the cathedral",
                "to take photos",
                "to go on a picnic",
                "to go to the museum",
                "to visit the Eiffel Tower",
                "to buy souvenirs",
                "to go on a boat trip",
                "to admire the Mona Lisa",
                "I want to",
                "you want to"
            ]
        }
        else if (lang == "fr") {
            return [
                "je vais",
                "tu vas",
                "il va",
                "elle va",
                "on va",
                "nous allons",
                "vous allez",
                "ils vont",
                "elles vont",
                "qu’est-ce que tu vas faire à Paris?",
                "visiter la cathédrale",
                "prendre des photos",
                "faire un pique-nique",
                "aller au musée",
                "visiter la Tour Eiffel",
                "acheter des souvenirs",
                "faire une balade en bateau-mouche",
                "admirer la Joconde",
                "je veux",
                "tu veux"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Schools: function (lang) {
        if (lang == "en") {
            return [
                "The school day",
                "To leave",
                "To arrive",
                "To meet",
                "To start",
                "To eat",
                "To sing ",
                "To play",
                "To start",
                "To return",
                "School ",
                "Home",
                "Lessons",
                "Canteen",
                "Choir",
                "My friends ",
                "My favourite subject",
                "I am good at",
                "Timetable",
                "Holidays"
            ]
        }
        else if (lang == "fr") {
            return [
                "La journée scolaire",
                "Quitter",
                "Arriver",
                "Retrouver",
                "Commencer",
                "Manger",
                "Chanter",
                "Jouer",
                "Recommencer",
                "Rentre",
                "Le college",
                "La maison",
                "Les cours",
                "La cantine",
                "La chorale",
                "Mes copains",
                "Ma matière préférée",
                "Je suis fort(e)",
                "L’emploi de temps",
                "Les vacances"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Siblings: function (lang) {
        if (lang == "en") {
            return [
                "A brother",
                "A sister",
                "A half brother",
                "A half sister",
                "I have ",
                "You have ",
                "He has",
                "She has",
                "I am ",
                "Only child (boy)",
                "Only child (girl)",
                "Age",
                "There is ",
                "There isn’t",
                "A board",
                "A poster",
                "A teacher",
                "A screen",
                "A computer",
                "A door",
                "A window",
                "A tablet",
                "Some tables",
                "Some chairs",
                "Some students",
                "At the back",
                "In the middle",
                "To the left",
                "To the right ",
                "It is"
            ]
        }
        else if (lang == "fr") {
            return [
                "Un frère",
                "Une soeur",
                "Un demi-frère",
                "Une demie-soeur",
                "J’ai",
                "Tu as",
                "Il a",
                "Elle a",
                "Je suis",
                "Fils unique",
                "Fille unique",
                "âge",
                "Il y a",
                "Il n’y a pas",
                "Un tableau",
                "Un poster",
                "Un professeur",
                "Un écran",
                "Un ordinateur",
                "Une porte",
                "Une fenêtre",
                "Une tablette",
                "Des tables",
                "Des chaises",
                "Des élèves",
                "Au fond",
                "Au centre",
                "À gauche",
                "À droite",
                "C’est"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Sports: function (lang) {
        if (lang == "en") {
            return [
                "Basketball",
                "Football",
                "Handball",
                "Pingpong",
                "Hockey",
                "Rugby",
                "Tennis",
                "Boules",
                "A team",
                "Canoeing/kayaking",
                "Skiing",
                "Skating",
                "Mountain biking",
                "Surfing",
                "Snowboarding",
                "Snowboarding",
                "Gymnastics",
                "Sailing",
                "Swimming",
                "Windsurfing",
                "Scuba diving",
                "Horse riding",
                "Climbing",
                "Hiking",
                "Athletics"
            ]
        }
        else if (lang == "fr") {
            return [
                "Le basket",
                "Le foot",
                "Le hand",
                "Le ping pong",
                "L’hockey",
                "Le rugby",
                "Le tennis",
                "Les boules",
                "Une équipe",
                "Le canoë-kayak",
                "Le ski",
                "Le skate",
                "VTT",
                "Le surf",
                "Le surf sur neige",
                "Le snowboard",
                "La gymnastique",
                "La voile",
                "La natation",
                "La planche à voile",
                "La plongée sous-marine",
                "L’équitation",
                "L’escalade (f)",
                "L’alpinisme",
                "athlétisme"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Towns: function (lang) {
        if (lang == "en") {
            return [
                "What is there in?",
                "your town/village",
                "There is/are",
                "a leisure centre",
                "a shopping centre",
                "a castle",
                "a market",
                "a museum",
                "a mosque",
                "an ice rink",
                "a swimming pool",
                "(some) shops",
                "There isn’t a café",
                "There are no shops",
                "There isn’t a church",
                "I like my town because",
                "I love my village because",
                "I don’t like living here because",
                "it’s fun",
                "it’s boring"
            ]
        }
        else if (lang == "fr") {
            return [
                "Qu’est-ce qu’il y a?",
                "ta ville/ton village",
                "Il y a",
                "un centre de loisirs",
                "un centre commercial",
                "un château",
                "un marché",
                "un musée",
                "une mosquée",
                "une patinoire",
                "une piscine",
                "des magasins",
                "Il n’y a pas de café",
                "Il n’y a pas de magasins",
                "Il n’y a pas d'église",
                "J’aime ma ville parce que",
                "J’adore mon village parce que",
                "Je n’aime habiter pas ici parce que",
                "c’est amusant",
                "c’est ennuyeux"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
    Verbs: function (lang) {
        if (lang == "en") {
            return [
                "I am",
                "I am not",
                "You are",
                "He is",
                "She is",
                "Funny",
                "Arrogant",
                "Chatty",
                "Strong",
                "Big / tall",
                "Clever",
                "Nasty",
                "Patient",
                "Small",
                "Shy",
                "To sing",
                "To dance",
                "To meet up",
                "To blog",
                "To chat",
                "To chat",
                "To surf",
                "To have a laugh",
                "To swim",
                "To play",
                "To win",
                "To talk",
                "To listen",
                "To write",
                "To read"
            ]
        }
        else if (lang == "fr") {
            return [
                "Je suis",
                "Je ne suis pas",
                "Tu es",
                "Il est",
                "Elle est",
                "amusant",
                "arrogant",
                "bavard",
                "fort",
                "grand",
                "intelligent",
                "méchant",
                "patient",
                "petit",
                "timide",
                "chanter",
                "danser",
                "retrouver",
                "bloguer",
                "bavarder",
                "tchatter",
                "surfer",
                "rigoler",
                "nager",
                "jouer",
                "gagner",
                "parler",
                "écouter",
                "écrire",
                "lire"
            ]
        }
        else {
            return "error: undefined parameter '" + lang + "'. Parameter should be either 'en' or 'fr";
        }
    },
}
}