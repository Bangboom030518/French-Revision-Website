//?VARIABLES
//?ELEMENTS
//constant elements
const popup = document.querySelector("#popup");
const scrollButton = document.querySelector(".btn-scroll");
const welcomeH1 = document.querySelector("h1#welcome-title");
const header = document.querySelector("header");
const buttons = document.querySelectorAll("button")
var accountTooltip;
//vocab checkboxes
const checkCafe = document.querySelector("#check-cafe");
const checkFuture = document.querySelector("#check-future");
const checkGreetings = document.querySelector("#check-greetings");
const checkFuture2 = document.querySelector("#check-future2");
const checkOpinions = document.querySelector("#check-opinions");
const checkParis = document.querySelector("#check-paris");
const checkSchools = document.querySelector("#check-schools");
const checkSiblings = document.querySelector("#check-siblings");
const checkSports = document.querySelector("#check-sports");
const checkTowns = document.querySelector("#check-towns");
const checkVerbs = document.querySelector("#check-verbs");
//games elements
const playGame = document.querySelector("#play-game");
const gameContainer = document.querySelector("#game");
const checkMultiple = document.querySelector("#check-multiple");
const checkWritten = document.querySelector("#check-written");
const checkEnglish = document.querySelector("#check-english");
const checkFrench = document.querySelector("#check-french");
const vocabChecklist = document.querySelectorAll("#vocab-checklist input[type='checkbox']")
const vocabList = document.querySelectorAll("#vocab-checklist li")
var gameInput
var radioList;
var currentWord;
var target;
var radioChoice;
var radio1;
var radio2;
var radio3;
var radio4;
var select1;
var select2;
var select3;
var select4;
var correctSeletion;
var currrentINDEX;
var score2;
var localScore = localStorage.getItem("score");
var xyz;
var counter = 0;
//games variables
var languages = [];
var language;
var answerFormats = [];
var answerFormat;
var correct;
var correctWritten;
var inputVal;
var correctList = [];
//temporary auth elements
var txtEmail;
var txtPassword;
var txtName;
var btnLogin;
var btnSignUp;
var btnDelete;
var confirmPassword;
var rando;
//authentication
var UserId;
var UserEmail;
var UserName;
var CurrentUser;
//database
const database = firebase.database().ref();
const dbUsers = database.child("users");
var dbScore;
//text files
var settingsTxt;
var loginTxt;
var signupTxt;
var lines;
var selection = [];
var txtEnglish = [];
var txtFrench = [];
//other variables
var clicked = 0;
//words object
var words = {
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
  Verbs_Personalities: function (lang) {
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
function load() {
  /*for (x of buttons) {
    x.addEventListener("click", () => {
      alert("henlo")
    })
  }*/
  //convert arrays to session storage
  //!THIS CODE WORKS
  /*$(window).scroll(function() {
      var hT = $('#scroll-to').offset().top,
          hH = $('#scroll-to').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > (hT+hH-wH)){
        console.log('you have scrolled to the element');
      }
   });*/
  document.querySelector("body").addEventListener("offline", function () {
    alert("u r offline");
  })
  //?ADD AUTH LISTENER
  firebase.auth().onAuthStateChanged(function (user) {
    accountTooltip = document.querySelector("#account-tooltip");
    if (user) {
      console.log(user);
      UserId = user.uid.toString();
      UserName = user.displayName;
      console.log("user id = " + UserId);
      console.log("user name = " + UserName);
      dbScore = dbUsers.child(UserId).child("score");
      if (UserName != null) {
        if (welcomeH1) {
          welcomeH1.innerHTML = "Salut " + UserName;
          welcomeH1.classList.remove("translate-welcome");
        }
      }
      dbUsers.child(UserId).update({
        name: UserName,
        id: UserId,
      });
      accountTooltip.innerHTML =
        "<li onclick='settings();' class='translate-settings'>Réglages</li>\n" +
        "<li onclick='logout();' class='translate-logout'>Déconnexion</li>";
      setTimeout(function () {
        dbScore.on('value', snap => {
          accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'></p>";
          setTimeout(function () {
            document.querySelector("#score").innerHTML = "Score: " + snap.val();
            if (window.location.href.indexOf("index.html") != -1) {
              document.querySelector("#score2").innerHTML = "Score: " + snap.val();
            }
          }, 100);
        }, error => {
          alert("Error retrieving score data:\n" + error);
          accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'></p>";
          setTimeout(function () {
            document.querySelector("#score").innerHTML = "Score: " + localStorage.getItem("score");
            if (window.location.href.indexOf("index.html") != -1) {
              document.querySelector("#score2").innerHTML = "Score: " + snap.val();
            }
          }, 100);
        })
      }, 250)
      setTimeout(function () {
        if (accountTooltip.innerHTML.toString().indexOf("Se connecter") != -1) {
          accountTooltip.innerHTML = "";
          accountTooltip.innerHTML =
            "<li onclick='settings();' class='translate-settings'>Réglages</li>\n" +
            "<li onclick='logout();' class='translate-logout'>Déconnexion</li>" +
            setTimeout(function () {
              dbScore.on('value', snap => {
                accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'></p>";
                setTimeout(function () {
                  document.querySelector("#score").innerHTML = "Score: " + snap.val();
                  if (window.location.href.indexOf("index.html") != -1) {
                    document.querySelector("#score2").innerHTML = "Score: " + snap.val();
                  }
                }, 100);
              }, error => {
                alert("Error retrieving score data:\n" + error);
                accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'></p>";
                setTimeout(function () {
                  document.querySelector("#score").innerHTML = "Score: " + localStorage.getItem("score");
                  if (window.location.href.indexOf("index.html") != -1) {
                    document.querySelector("#score2").innerHTML = "Score: " + snap.val();
                  }
                }, 100);
              })
            }, 500)
        }
      }, 500)
    } else {
      console.log("not logged in");
      accountTooltip.innerHTML =
        "<li onclick='login();' class='translate-sign-in'>Se connecter</li>\n" +
        "<li onclick='signup();' class='translate-new-account'>Créer un nouveau compte</li>";
      dbScore = null;
      setTimeout(function () {
        if (localStorage.getItem("score")) {
          accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'>Score: " + localStorage.getItem("score") + "</p>";
        } else {
          accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'>Score: 0</p>";
        }
      }, 250);
      setTimeout(function () {
        if (accountTooltip.innerHTML.toString().indexOf("Déconnexion") != -1) {
          accountTooltip.innerHTML = "";
          accountTooltip.innerHTML =
            "<li onclick='login();' class='translate-sign-in'>Se connecter</li>\n" +
            "<li onclick='signup();' class='translate-new-account'>Créer un nouveau compte</li>";
          setTimeout(function () {
            if (localStorage.getItem("score")) {
              accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'>Score: " + localStorage.getItem("score") + "</p>";
            } else {
              accountTooltip.innerHTML = accountTooltip.innerHTML + "<p id='score'>Score: 0</p>";
            }
          }, 500);
        }
      }, 500)
    }
    //?EVENT LISTENERS
    var scrollHeight = window.innerHeight * 2 - header.offsetHeight;
    var scrollPosition = window.innerHeight + document.querySelector("html").scrollTop;
    if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
      header.style.backgroundColor = "#eba97a";
    } else {
      header.style.backgroundColor = "transparent";
    }
    document.addEventListener("scroll", () => {
      var scrollHeight = window.innerHeight * 2 - header.offsetHeight;
      var scrollPosition = window.innerHeight + document.querySelector("html").scrollTop;
      if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
        header.style.backgroundColor = "#eba97a";
      } else {
        header.style.backgroundColor = "transparent";
      }
    });
    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    });

  });
  //?CHECK URL
  if (window.location.href.indexOf("#login") > -1) {
    login();
  }
  if (window.location.href.indexOf("#signup") > -1) {
    signup();
  }
  if (window.location.href.indexOf("#settings") > -1) {
    settings();
  }
}
//?NAV FUNCTIONS
function email() {
  window.open("mailto:charlieclift19@wheatleypark.org", "_blank");
}
function home() {
  window.location.href = "index.html";
}
function help() {
  window.location.href = "help.html";
}
function login() {
  window.location.href = "#login";
  popup.style.display = "block";
  document.body.style.pointerEvents = "none";
  document.querySelector("html").style.overflowY = "hidden";
  document.querySelector(".arrow").style.animation = "none";
  //document.querySelector(`.arrow`).style.animation = `vload2 1s ease infinite`;
  popup.innerHTML =
    '<i class="fas fa-times fa-lg" onclick="javascript:document.getElementById(`popup`).style.display = `none`;' +
    'javascript:document.getElementById(`popup`).innerHTML = ``;' +
    'javascript:window.location.href = `#`;' +
    'javascript:document.body.style.pointerEvents = `initial`;' +
    'javascript:document.querySelector(`html`).style.overflowY = `auto`;' +
    'javascript:document.querySelector(`.arrow`).style.animation = `vload2 1s ease infinite`;' +
    '"></i>' +
    "<h2 class='translate-sign-in'>Se Connecter</h2>" +
    "<div class='form'>" +
    "<input id='email' type='text' name='email' autocomplete='email' required />" +
    "<span class='email'></span>" +
    "</div>" +
    "<br>" +
    "<div class='form'>" +
    "<input id='password' type='password' name='password' autocomplete='current-password' required />" +
    "<span class='password'></span>" +
    "</div>" +
    "<br>" +
    "<button id='submit' class='submit'>" +
    "<p class='translate-sign-in'>Se connecter</p><i style='color: #222222' class='fas fa-sign-in-alt'></i>" +
    "</button>" +
    "<br>" +
    "<p class='error' id='error'></p>" +
    "<a onclick='signup();'><p class='translate-no-account'>Je n'ai pas de Compte</p></a>";
  loadAuth();
}
function signup() {
  window.location.href = "#signup";
  popup.style.display = "block";
  document.body.style.pointerEvents = "none";
  document.querySelector("html").style.overflowY = "hidden";
  document.querySelector(".arrow").style.animation = "none";
  popup.innerHTML =
    '<i class="fas fa-times fa-lg" onclick="javascript:document.getElementById(`popup`).style.display = `none`;' +
    'javascript:document.getElementById(`popup`).innerHTML = ``;' +
    'javascript:window.location.href = `#`;' +
    'javascript:document.body.style.pointerEvents = `initial`;' +
    'javascript:document.querySelector(`html`).style.overflowY = `auto`;' +
    'javascript:document.querySelector(`.arrow`).style.animation = `vload2 1s ease infinite`;' +
    '"></i>' +
    "<h2 class='translate-new-account'>Créer un nouveau compte</h2>" +
    "<div class='form'>" +
    "<input id='name' type='text' name='name' autocomplete='name' required />" +
    "<span class='name'></span>" +
    "</div>" +
    "<br>" +
    "<div class='form'>" +
    "<input id='email' type='text' name='email' autocomplete='email' required />" +
    "<span class='email'></span>" +
    "</div>" +
    "<br>" +
    "<div class='form'>" +
    "<input id='password' type='password' name='password' autocomplete='current-password' required />" +
    "<span class='password'></span>" +
    "</div>" +
    "<br>" +
    "<div class='form'>" +
    "<input id='confirmPassword' type='password' name='password' autocomplete='current-password' required />" +
    "<span class='confirm'></span>" +
    "</div>" +
    "<div id='form-break'></div>" +
    "<button id='submit2' class='submit'>" +
    "<p class='translate-new-account'>Créer un nouveau compte</p>" +
    "<i style='color: #222222' class='fas fa-plus'></i>" +
    "</button>" +
    "<p class='error' id='error'></p>" +
    "<a onclick='login();'>" +
    "<p class='translate-yes-account'>J'ai un Compte, se connecter.</p>" +
    "</a>";
  loadAuth();
}

function settings() {
  popup.style.display = "block";
  document.body.style.pointerEvents = "none";
  document.querySelector("html").style.overflowY = "hidden";
  document.querySelector(".arrow").style.animation = "none";
  popup.innerHTML =
    '<i class="fas fa-times fa-lg" onclick="javascript:document.getElementById(`popup`).style.display = `none`;' +
    'javascript:document.getElementById(`popup`).innerHTML = ``;' +
    'javascript:window.location.href = `#`;' +
    'javascript:document.body.style.pointerEvents = `initial`;' +
    'javascript:document.querySelector(`html`).style.overflowY = `auto`;' +
    'javascript:document.querySelector(`.arrow`).style.animation = `vload2 1s ease infinite`;' +
    '"></i>' +
    '<h2 class="translate-settings">Réglages</h2>' +
    '<button id="delete-user" class="submit">' +
    '<p class="translate-delete-account">Effacer ce compte</p>' +
    '<i style="color: #222222" class="fas fa-trash-alt"></i>' +
    '</button>' +
    '<p class="error" id="error"></p>'
  loadAuth();
}
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("score");
    firebase.auth().signOut();
    location.reload();
  }
}

//?OTHER FUNCTIONS
function loadAuth() {
  txtEmail = document.querySelector("#email");
  txtPassword = document.querySelector("#password");
  btnLogin = document.querySelector("#submit");
  btnSignUp = document.querySelector("#submit2");
  txtName = document.querySelector("#name");
  confirmPassword = document.querySelector("#confirmPassword");
  btnDelete = document.querySelector("#delete-user");
  // Add login event
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(
        (e) => (document.getElementById("error").innerHTML = e.message)
      );
      setTimeout(function () {
        if (document.getElementById("error").innerHTML == "") {
          close();
          alert("salut " + firebase.auth().currentUser.displayName);
        }
      }, 1000);
    });
  }
  //Add signup event
  if (btnSignUp) {
    btnSignUp.addEventListener("click", () => {
      if (
        confirm(
          "WARNING:\nYou are about to create an account with secondary french revision. " +
          "Please be aware that while your email and password are not stored in the database, your name is. " +
          "It does not have to be your actual name and will be used in the leaderboard, visible to everyone using this site. " +
          "By pressing 'Ok' you agree to this. " +
          "Your email, as far as I am aware, is visible to me only but there may be loopholes through which it can be retrieved. " +
          "It is used for authentication only so it does not need to be a real address. " +
          "I am afraid I cannot vouch for any of the data you submit remaining only where it is needed so please be aware of the risk you take when signing up. " +
          "For more details see the privacy section of the help page.\n Thank you!"
        )
      ) {
        var errorText = document.querySelector("#error");
        if (isEmail(txtEmail.value)) {
          if (txtName.value != "") {
            if (txtPassword.value != "") {
              if (txtPassword.value == confirmPassword.value) {
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const name = txtName.value;
                const auth = firebase.auth();
                const promise = auth.createUserWithEmailAndPassword(
                  email,
                  pass
                );
                promise.catch(
                  (e) =>
                    (document.getElementById("error").innerHTML = e.message)
                );
                setTimeout(function () {
                  if (document.getElementById("error").innerHTML == "") {
                    CurrentUser = firebase.auth().currentUser;
                    CurrentUser.updateProfile({
                      displayName: name,
                    })
                      .then(function () {
                        console.log("success!");
                      })
                      .catch(function (error) {
                        document.getElementById("error").innerHTML = error;
                      });
                    close();
                    location.reload();
                  }
                }, 1000);
              } else {
                errorText.innerHTML = "Please confirm you password";
              }
            } else {
              errorText.innerHTML = "Please specify a password";
            }
          } else {
            errorText.innerHTML = "Please specify a name";
          }
        } else {
          errorText.innerHTML = "Email address is not valid";
        }
        return false;
      } else {
        close();
      }
    });
  }
  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (
        confirm(
          "Are you sure you want to delete this account? All data associated with this account will PERMANANTLY be lost."
        )
      ) {
        CurrentUser = firebase.auth().currentUser;
        dbUsers
          .child(CurrentUser.uid)
          .set(null)
          .then(function () {
            console.log("database delete successful");
          })
          .catch(function (error) {
            document.querySelector("#error").innerHTML = error;
          });
        CurrentUser.delete()
          .then(function () {
            console.log("auth delete succesful");
          })
          .catch(function (error) {
            document.querySelector("#error").innerHTML = error;
          });
        if ((document.querySelector("#error").innerHTML = "")) {
          alert("Delete successful");
          close();
          location.reload();
        } else {
          alert("Sorry, an error ocurred");
        }
      }
    });
  }
}
function isEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function close() {
  setTimeout(function () {
    popup.style.display = "none";
    popup.innerHTML = "";
  }, 500);
}
//?VOCABULARY RANDOMISER
function loadVocab() {
  selection = [];
  if (localStorage.getItem("selection")) {
    selection = JSON.parse(localStorage.getItem("selection"));
  }
  var i = 0;
  for (x of vocabChecklist) {
    var name = vocabList[i].innerText;
    if (selection.indexOf(name) > -1) {
      x.click()
    }
    i++;
  }
  localStorage.setItem("selection", JSON.stringify(selection));
  //?CHECKBOXES
  loadCheck()
}
  function loadCheck() {
    selection = [];
    var i = 0;
    for (x of vocabChecklist) {
      console.log(selection)
      var name = vocabList[i].innerText;
      if (x.checked) {
        if (selection.indexOf(name == -1)) {
          selection.push(name);
        }
      } else {
        if (selection.indexOf(name) > -1) {
          selection.splice(selection.indexOf(name), 1);
        }
      }
      x.addEventListener("click", () => {
        loadCheck();
        return;
      })
      i++;
    }
  /*if (checkCafe.checked) {
    if (selection.indexOf("Cafe") == -1) {
      selection.push("Cafe");
    }
  } else {
    if (selection.indexOf("Cafe") != -1) {
      selection.splice(selection.indexOf("Cafe"), 1);
    }
  }
  if (checkFuture.checked) {
    if (selection.indexOf("Future") == -1) {
      selection.push("Future");
    }
  } else {
    if (selection.indexOf("Future") != -1) {
      selection.splice(selection.indexOf("Future"), 1);
    }
  }
  if (checkGreetings.checked) {
    if (selection.indexOf("Greetings") == -1) {
      selection.push("Greetings");
    }
  } else {
    if (selection.indexOf("Greetings") != -1) {
      selection.splice(selection.indexOf("Greetings"), 1);
    }
  }
  if (checkFuture2.checked) {
    if (selection.indexOf("Future2") == -1) {
      selection.push("Future2");
    }
  } else {
    if (selection.indexOf("Future2") != -1) {
      selection.splice(selection.indexOf("Future2"), 1);
    }
  }
  if (checkOpinions.checked) {
    if (selection.indexOf("Opinions") == -1) {
      selection.push("Opinions");
    }
  } else {
    if (selection.indexOf("Opinions") != -1) {
      selection.splice(selection.indexOf("Opinions"), 1);
    }
  }
  if (checkParis.checked) {
    if (selection.indexOf("Paris") == -1) {
      selection.push("Paris");
    }
  } else {
    if (selection.indexOf("Paris") != -1) {
      selection.splice(selection.indexOf("Paris"), 1);
    }
  }
  if (checkSchools.checked) {
    if (selection.indexOf("Schools") == -1) {
      selection.push("Schools");
    }
  } else {
    if (selection.indexOf("Schools") != -1) {
      selection.splice(selection.indexOf("Schools"), 1);
    }
  }
  if (checkSiblings.checked) {
    if (selection.indexOf("Siblings") == -1) {
      selection.push("Siblings");
    }
  } else {
    if (selection.indexOf("Siblings") != -1) {
      selection.splice(selection.indexOf("Siblings"), 1);
    }
  }
  if (checkSports.checked) {
    if (selection.indexOf("Sports") == -1) {
      selection.push("Sports");
    }
  } else {
    if (selection.indexOf("Sports") != -1) {
      selection.splice(selection.indexOf("Sports"), 1);
    }
  }
  if (checkTowns.checked) {
    if (selection.indexOf("Towns") == -1) {
      selection.push("Towns");
    }
  } else {
    if (selection.indexOf("Towns") != -1) {
      selection.splice(selection.indexOf("Towns"), 1);
    }
  }
  if (checkVerbs.checked) {
    if (selection.indexOf("Verbs") == -1) {
      selection.push("Verbs");
    }
  } else {
    if (selection.indexOf("Verbs") != -1) {
      selection.splice(selection.indexOf("Verbs"), 1);
    }
  }*/
  /*console.log(selection.join("\n"));
  checkCafe.addEventListener("click", () => {
    if (checkCafe.checked) {
      if (selection.indexOf("Cafe") == -1) {
        selection.push("Cafe");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Cafe") != -1) {
        selection.splice(selection.indexOf("Cafe"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkFuture.addEventListener("click", () => {
    if (checkFuture.checked) {
      if (selection.indexOf("Future") == -1) {
        selection.push("Future");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Future") != -1) {
        selection.splice(selection.indexOf("Future"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkGreetings.addEventListener("click", () => {
    if (checkGreetings.checked) {
      if (selection.indexOf("Greetings") == -1) {
        selection.push("Greetings");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Greetings") != -1) {
        selection.splice(selection.indexOf("Greetings"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkFuture2.addEventListener("click", () => {
    if (checkFuture2.checked) {
      if (selection.indexOf("Future2") == -1) {
        selection.push("Future2");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Future2") != -1) {
        selection.splice(selection.indexOf("Future2"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkOpinions.addEventListener("click", () => {
    if (checkOpinions.checked) {
      if (selection.indexOf("Opinions") == -1) {
        selection.push("Opinions");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Opinions") != -1) {
        selection.splice(selection.indexOf("Opinions"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkParis.addEventListener("click", () => {
    if (checkParis.checked) {
      if (selection.indexOf("Paris") == -1) {
        selection.push("Paris");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Paris") != -1) {
        selection.splice(selection.indexOf("Paris"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection));
  });
  checkSchools.addEventListener("click", () => {
    if (checkSchools.checked) {
      if (selection.indexOf("Schools") == -1) {
        selection.push("Schools");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Schools") != -1) {
        selection.splice(selection.indexOf("Schools"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkSiblings.addEventListener("click", () => {
    if (checkSiblings.checked) {
      if (selection.indexOf("Siblings") == -1) {
        selection.push("Siblings");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Siblings") != -1) {
        selection.splice(selection.indexOf("Siblings"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkSports.addEventListener("click", () => {
    if (checkSports.checked) {
      if (selection.indexOf("Sports") == -1) {
        selection.push("Sports");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Sports") != -1) {
        selection.splice(selection.indexOf("Sports"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkTowns.addEventListener("click", () => {
    if (checkTowns.checked) {
      if (selection.indexOf("Towns") == -1) {
        selection.push("Towns");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Towns") != -1) {
        selection.splice(selection.indexOf("Towns"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });
  checkVerbs.addEventListener("click", () => {
    if (checkVerbs.checked) {
      if (selection.indexOf("Verbs") == -1) {
        selection.push("Verbs");
      }
      console.log(selection.join("\n"));
    } else {
      if (selection.indexOf("Verbs") != -1) {
        selection.splice(selection.indexOf("Verbs"), 1);
        console.log(selection.join("\n"));
      }
    }
    localStorage.setItem("selection", JSON.stringify(selection))
  });*/
  //?RETRIEVE DATA
  /*  if (selection.indexOf("Cafe") == -1) {
      checkCafe.click();
    }
    if (selection.indexOf("Future") == -1) {
      checkFuture.click();
    }
    if (selection.indexOf("Future2") == -1) {
      checkFuture2.click();
    }
    if (selection.indexOf("Greetings") == -1) {
      checkGreetings.click();
    }
    if (selection.indexOf("Opinions") == -1) {
      checkOpinions.click();
    }
    if (selection.indexOf("Paris") == -1) {
      checkParis.click();
    }
    if (selection.indexOf("Schools") == -1) {
      checkSchools.click();
    }
    if (selection.indexOf("Siblings") == -1) {
      checkSiblings.click();
    }
    if (selection.indexOf("Sports") == -1) {
      checkSports.click();
    }
    if (selection.indexOf("Towns") == -1) {
      checkTowns.click();
    }
    if (selection.indexOf("Verbs") == -1) {
      checkVerbs.click();
    }
    //?GAME
    playGame.addEventListener("click", () => {
      playVocab();
    });*/
}
function getVocab() {

  /*import('./storage/javascript/vocab.js').then(({ default: loadWords }) => {
  })


    .catch(err => {
      console.log('%c' + err.message, 'color: red;');
    });*/
  txtFrench = [];
  txtEnglish = [];
  for (x of selection) {
    console.log(x)
    txtFrench = txtFrench.concat(words[x]("fr"))
    txtEnglish = txtEnglish.concat(words[x]("en"))
  }
}
//?VOCAB GAME
function playVocab() {
  getVocab();
  languages = [];
  correctList = [];
  answerFormats = [];
  //get elements
  var languageChosen;

  //check languages
  if (checkEnglish.checked) {
    languages.push("english");
  }
  if (checkFrench.checked) {
    languages.push("french");
  }
  else if (checkEnglish.checked) { }
  else {
    alert("Please select a language");
    languageChosen = "nope";
  }
  if (languageChosen != "nope") {
    gameContainer.innerHTML = "<br id='form-break'>\n<p id='current-word'>Current Word</p>"
    if (checkWritten.checked) {
      answerFormats.push("written");
      gameContainer.innerHTML = gameContainer.innerHTML +
        "<div class='form' id='target'></div>" +
        "<br id='form-break'>";
      target = document.querySelector("#target");
    }
    if (checkMultiple.checked) {
      answerFormats.push("multiple");
      gameContainer.innerHTML = gameContainer.innerHTML + "<ul class='radio-list'></ul>";
      radioList = document.querySelector(".radio-list");
    }
    currentWord = document.querySelector("#current-word");
    pickWord();
    var style = document.createElement("style");
    document.head.appendChild(style);
    document.addEventListener('click', (event) => {
      if (event.composedPath().includes(target)) {
        clicked = 1;
        //style.innerHTML = "#badboi::after {margin-bottom: -1px}"
        //setTimeout(function() {
        style.innerHTML = "";
        //}, 300)
      } else {
        if (clicked == 1) {
          style.innerHTML = "#badboi::after {bottom: -2px;}"
        }
      }
    });
  }
}
function pickWord() {
  //pick a language
  if (languages.length == 2) {
    language = languages[random(0, 1)];
  }
  else {
    language = languages[0];
  }
  //pick a word
  if (language == "english") {
    currrentINDEX = random(0, txtEnglish.length - 1);
    currentWord.innerHTML = txtEnglish[currrentINDEX];
    /*if (answerFormats.indexOf("written") == -1) {
      target.innerHTML = "";
    }*/
    currentWord.style.color = "#4287f5";
    gameContainer.style.color = "#ff644d";
  }
  else {
    currrentINDEX = random(0, txtFrench.length - 1);
    currentWord.innerHTML = txtFrench[currrentINDEX];
    currentWord.style.color = "#ff644d";
    gameContainer.style.color = "#4287f5";
  }
  //pick an answering format
  if (answerFormats.length >= 2) {
    answerFormat = answerFormats[random(0, answerFormats.length - 1)];
  }
  else {
    answerFormat = answerFormats[0];
  }
  //pick word
  if (language == "english") {
    correct = txtFrench[currrentINDEX];

  } else {
    correct = txtEnglish[currrentINDEX];
  }
  if (answerFormat == "multiple") {
    radioList.innerHTML = "" +
      "<label><input type='radio' name='choice' value='1' id='one'><span class='radiomark'></span><label for='one'>One</label></label>" +
      "<label><input type='radio' name='choice' value='2' id='two'><span class='radiomark'></span><label for='two'>Two</label></label>" +
      "<label><input type='radio' name='choice' value='3' id='three'><span class='radiomark'></span><label for='three'>Three</label></label>" +
      "<label><input type='radio' name='choice' value='4' id='four'><span class='radiomark'></span><label for='four'>Four</label></label>";
    radioChoice = document.querySelector("input[name=choice]:checked");
    radio1 = document.querySelector("label[for=one]");
    radio2 = document.querySelector("label[for=two]");
    radio3 = document.querySelector("label[for=three]");
    radio4 = document.querySelector("label[for=four]");
    select1 = document.querySelector("#one");
    select2 = document.querySelector("#two");
    select3 = document.querySelector("#three");
    select4 = document.querySelector("#four");
    if (answerFormats.indexOf("written") != -1) {
      target = document.querySelector("#target");
      target.innerHTML = "";
    }
  } else {
    target = document.querySelector("#target");
    target.innerHTML = "" +
      "<input id='game-input' type='text' name='text' required>" +
      "<span class='answer'></span>";
    if (answerFormats.indexOf("multiple") != -1) {
      radioList.innerHTML = "";
    }
    gameInput = document.querySelector("#game-input");
  }
  if (answerFormat == "multiple") {
    pickMultiple();
  }
  if (answerFormat == "written") {
    gameInput.addEventListener("change", () => {
      pickWritten(correct);
    })
  }
}
var correctRadio;
function pickMultiple() {
  correctRadio = random(1, 4);
  var choices = [];
  switch (correctRadio) {
    case 1:
      radio1.innerHTML = correct;
      choices.push(radio1.innerHTML);
      if (language == "english") {
        radio2.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio2.innerHTML);
        radio3.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio3.innerHTML);
        radio4.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio4.innerHTML);
      } else {
        radio2.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio2.innerHTML);
        radio3.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio3.innerHTML);
        radio4.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio4.innerHTML);
      }
      break;
    case 2:
      radio2.innerHTML = correct;
      choices.push(radio2.innerHTML);
      if (language == "english") {
        radio1.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio1.innerHTML);
        radio3.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio3.innerHTML);
        radio4.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio4.innerHTML);
      } else {
        radio1.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio1.innerHTML);
        radio3.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio3.innerHTML);
        radio4.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio4.innerHTML);
      }
      break;
    case 3:
      radio3.innerHTML = correct;
      choices.push(radio3.innerHTML);
      if (language == "english") {
        radio1.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio1.innerHTML);
        radio2.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio2.innerHTML);
        radio4.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
      } else {
        radio1.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio1.innerHTML);
        radio2.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio2.innerHTML);
        radio4.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio4.innerHTML);
      }
      break;
    case 4:
      radio4.innerHTML = correct;
      choices.push(radio4.innerHTML);
      if (language == "english") {
        radio1.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio1.innerHTML);
        radio3.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio3.innerHTML);
        radio2.innerHTML = txtFrench[random(1, (txtFrench.length) - 1)];
        choices.push(radio2.innerHTML);
      } else {
        radio1.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio1.innerHTML);
        radio3.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio3.innerHTML);
        radio2.innerHTML = txtEnglish[random(1, (txtEnglish.length) - 1)];
        choices.push(radio2.innerHTML);
      }
      break;
  }
  if (choices.length > 4) {
    alert("An error has occured while loading your options");
  }
  for (x of choices) {
    if (choices.indexOf(x) != choices.lastIndexOf(x)) {
      pickMultiple();
      return
    }
  }
  //get score
  var score;
  if (dbScore != null) {
    dbScore.once('value').then((snapshot) => {
      score = snapshot.val();
    }).catch(function (error) {
      alert("Error retrieving score data:\n" + error);
    });
  } else if (localStorage.getItem("score")) {
    score = localStorage.getItem("score");
  } else {
    score = 0;
  }
  localScore = localStorage.getItem("score");
  select1.addEventListener("click", () => {
    radioChoice = document.querySelector("input[name=choice]:checked");
    if (correctRadio == 1) {
      //set new score
      if (firebase.auth().currentUser) {
        if (dbScore != null) {
          dbScore.set(score + 1).then(function () { })
            .catch(function (error) {
              alert("Error retrieving score data:\n" + error);
            });
        } else {
          dbScore.set(1).then(function () { })
            .catch(function (error) {
              alert("Error retrieving score data:\n" + error);
            });
        }
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) + 1));
      } else {
        localStorage.setItem("score", JSON.stringify(1));
      }
      gameContainer.style.backgroundColor = "#94ff4d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    } else {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score - 1)
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) - 1));
      } else {
        localStorage.setItem("score", JSON.stringify(0));
      }
      gameContainer.style.backgroundColor = "#ff644d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    }
    pickWord();
  });
  select2.addEventListener("click", () => {
    radioChoice = document.querySelector("input[name=choice]:checked");
    if (correctRadio == 2) {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score + 1)
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) + 1));
      } else {
        localStorage.setItem("score", JSON.stringify(1));
      }
      gameContainer.style.backgroundColor = "#94ff4d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);

    } else {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score - 1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1)
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) - 1));
      } else {
        localStorage.setItem("score", JSON.stringify(0));
      }
      gameContainer.style.backgroundColor = "#ff644d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    }
    pickWord();
  });
  select3.addEventListener("click", () => {
    radioChoice = document.querySelector("input[name=choice]:checked");
    if (correctRadio == 3) {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score + 1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) + 1));
      } else {
        localStorage.setItem("score", JSON.stringify(1));
      }
      gameContainer.style.backgroundColor = "#94ff4d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);

    } else {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score - 1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) - 1));
      } else {
        localStorage.setItem("score", JSON.stringify(0));
      }
      gameContainer.style.backgroundColor = "#ff644d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    }
    pickWord();
  });
  select4.addEventListener("click", () => {
    radioChoice = document.querySelector("input[name=choice]:checked");
    if (correctRadio == 4) {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score + 1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) + 1));
      } else {
        localStorage.setItem("score", JSON.stringify(1));
      }
      gameContainer.style.backgroundColor = "#94ff4d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    } else {
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(score - 1)
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) - 1));
      } else {
        localStorage.setItem("score", JSON.stringify(0));
      }
      gameContainer.style.backgroundColor = "#ff644d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    }
    pickWord();
  });
}
function pickWritten(correct) {
  if (dbScore != null) {
    dbScore.once('value').then((snapshot) => {
      score2 = snapshot.val();
    }).catch(function (error) {
      alert("Error retrieving score data:\n" + error);
    });
  } else if (localStorage.getItem("score")) {
    score2 = localStorage.getItem("score");
  } else {
    score2 = 0;
  }
  setTimeout(function () {
    localScore = localStorage.getItem("score");
    correctWritten = JSON.parse(JSON.stringify(correct)).toLowerCase().trim();
    inputVal = JSON.parse(JSON.stringify(gameInput.value)).toLowerCase().trim();
    var correctWords = correctWritten.split(" ");
    var inputWords = inputVal.split(" ");
    var correctNumber = 0;
    if (inputVal.indexOf("é") > -1) {
      inputVal = inputVal.split("");
      inputVal.splice(inputVal.indexOf("é"), 1, "e")
      inputVal = inputVal.join("");
    }
    if (correctWritten.indexOf("é") > -1) {
      correctWritten = correctWritten.split("");
      correctWritten.splice(correctWritten.indexOf("é"), 1, "e")
      correctWritten = correctWritten.join("");
    }
    correctList.push(correctWritten);
    if (correct.indexOf("/") != -1) {
      correctList = correctList.concat(JSON.parse(JSON.stringify(correct).toLowerCase().trim()).split("/"));
    }
    for (x of correctWords) {
      if (inputWords.indexOf(x) > -1) {
        correctNumber += 1;
      }
    }
    if (parseInt(correctNumber) == correctWords.length) {
      inputVal = correctWritten;
    }
    for (i = 0; i < correctList.length; i++) {
      correctList[i] = correctList[i].trim()
    }
  }, 500)
  setTimeout(function () {
    if (correctList.indexOf(inputVal) != -1) {
      pickWord();
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(JSON.parse(JSON.stringify(score2 + 1)));
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) + 1));
      } else {
        localStorage.setItem("score", JSON.stringify(1));
      }
      gameContainer.style.backgroundColor = "#94ff4d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
    } else {
      alert("Actually, it was " + correct + " :(");
      //set new score
      if (dbScore != null) {
        var task = dbScore.set(JSON.parse(JSON.stringify(score2 - 1)));
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      } else if (firebase.auth().currentUser) {
        var task = dbScore.set(1);
        task.catch(e => {
          alert("Error retrieving score data:\n" + e.message);
        });
      }
      if (localScore) {
        localStorage.setItem("score", JSON.stringify(JSON.parse(localScore) - 1));
      } else {
        localStorage.setItem("score", JSON.stringify(0));
      }
      gameContainer.style.backgroundColor = "#ff644d";
      setTimeout(function () {
        gameContainer.style.backgroundColor = "transparent";
      }, 1000);
      pickWord();
    }
  }, 1000)
}
//?RANDOM NUMBER
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}