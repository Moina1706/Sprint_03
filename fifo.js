// Fichier Javascript pour gerer une file de participant

//console.log("je suis dans le javascript");


var participant ={};  // declarer l'Objet qui va contenir le nom, la date, id d'une personne

//Fonction permettant de saisir le nom et d'ajouter la date 

function AjoutListe() {
    var valeurText = document.getElementById("source").value;
    const date = new Date();  //format date parsing
    var mois= date.getFullYear();

    console.log("Data",mois);

    // Je vais gerer les informations avec des Objets
    participant.nom = valeurText;
    participant.dateinscription = date;

    //participant.boutonpasse= action4.id.status;

   document.getElementById("td1").innerHTML = valeurText ;
   document.getElementById("td2").innerHTML = date;

  }

  function suivant(){
// Cette fonction servira à supprimer de la liste les participants qui auront été aidé

  }

  function rafraichir(){
      // Cette fonction servira à rafraichir la liste et effacer les apprenant qui auront annulé le besoins d'aide
  }

  function jepasse(){

    // fonction quand le participant appuie sur le bouton je passe mon tour
  }
