// Fichier Javascript pour gerer une file de participant

//console.log("je suis dans le javascript");

var participant = []; // declarer l'Objet qui va contenir le nom, la date, id d'une personne
var valeur_id = 0;
var tab_passer1 = []; // va stocker le id des personnes qui passent leur tour

function AjoutListe() {
  var nom_participant = document.getElementById("source").value;
  var date1 = fullDate();

  var user = new Person(nom_participant, date1);

  function Person(nom_participant, date1) {
    this.nom_participant = nom_participant;
    this.date1 = date1;
  }

  participant.push(user);

  // Si le input est vide n'envoie rien dans le tableau
  if (nom_participant == "") {
    participant.push(nom_participant);
    user();
  }

  console.log("les participants", participant);

  // creer le tableau
  var table_user = document.getElementById("table1");

  var tr_user = document.createElement("tr"); //La ligne
  var td_user_nom = document.createElement("td"); // Les cellules
  var td_user_time = document.createElement("td");
  var td_user_bouton = document.createElement("td");

  var btn_passer = document.createElement("button");
  btn_passer.id = "idbtn" + valeur_id;
  // les classes des elements du tableau
  tr_user.className = "tr_demandant_base";
  td_user_nom.className = "td_nom_demandant_base";
  td_user_time.className = "td_time_demandant_base";
  btn_passer.className = "action4";

  btn_passer.textContent = "Je passe mon tour"; //text du bouton btn

  //console.dir(btn_passer);

  for (var i = 0; i < participant.length; i++) {
    td_user_nom.textContent = participant[i].nom_participant;
    td_user_time.textContent = participant[i].date1;
    // btn_passer.id = i;
    // console.log("btnID", btn_passer.id);

    td_user_bouton.appendChild(btn_passer);

    table_user.appendChild(tr_user);
    tr_user.appendChild(td_user_nom);
    tr_user.appendChild(td_user_time);
    tr_user.appendChild(td_user_bouton);
  }
  valeur_id++;
  btn_passer.addEventListener("click", jepasse); //Aller à la fonction jepasse
}

//**********************************************************
// Fonction pour mettre l'heure au bon format
function fullDate() {
  const date = new Date(); //format date parsing
  var annee = date.getFullYear();
  var mois = addZero(date.getMonth() + 1);
  var jour = addZero(date.getDay());
  var heure = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  var secondes = addZero(date.getSeconds());

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var date_entiere =
    jour +
    "/" +
    mois +
    "/" +
    annee +
    ", " +
    heure +
    ":" +
    minutes +
    ":" +
    secondes;
  //console.log(fullDate);

  document.getElementById("source").value = null; // Efface le champs de saisie(textarea)source dans le HTML
  return date_entiere;
}
//****************************************************

// Cette fonction servira à supprimer de la liste les participants qui auront été aidé

function suivant() {
  participant.push(participant[0]);

  // ******************************************************
  // Je vais refaire une ligne dans la table
  var table = document.getElementById("table1");
  var table_user = document.getElementById("table1");
  var tr_user = document.createElement("tr");

  var td_user_nom = document.createElement("td");
  var td_user_time = document.createElement("td");
  var td_user_bouton = document.createElement("td");

  tr_user.className = "tr_demandant_base1";
  td_user_nom.className = "td_nom_demandant_base";
  td_user_time.className = "td_time_demandant_base";

  td_user_nom.textContent = participant[j].nom_participant;

  td_user_time.textContent = participant[j].date1;

  table_user.appendChild(tr_user);
  tr_user.appendChild(td_user_nom);
  tr_user.appendChild(td_user_time);
  tr_user.appendChild(td_user_bouton);
  table.deleteRow(1);
  //console.log(table_user);
  participant.splice(0, 1);
  if (document.getElementById(tr_user).classList.contains("nom_bt_passer")) {
    //participant
  }
  console.log("participant apres slice", participant);
}

//********************************************************************************
// fonction quand le participant appuie sur le bouton je passe mon tour

function jepasse(event) {
  const id_btn = event.target.id;
  console.log("le id_choisie", id_btn);
  const td_bouton = document.getElementById(id_btn).parentElement.parentElement;
  td_bouton.className = "nom_bt_passer"; // donne le style gris et barré
  console.log(td_bouton);

  tab_passer1.push(id_btn); // stocke le id pour effacer de la liste dans la fonction rafraichir
}

// Cette fonction servira à rafraichir la liste et effacer les apprenant qui auront annulé le besoins d'aide
function rafraichir() {
  //console.log("Je rafraichie");

  console.log("taille", tab_passer1.length);

  for (let i = 0; i < tab_passer1.length; i++) {
    console.log("tabi", tab_passer1[i]);
    const ligne_rafraichir = document.getElementById(tab_passer1[i])
      .parentElement.parentElement;
    ligne_rafraichir.remove();
  }
  tab_passer1 = []; // Reinitialiser le tableau avec les apprenants ayant passer leur tour
}
