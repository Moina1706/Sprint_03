// Fichier Javascript pour gerer une file de participant

//console.log("je suis dans le javascript");


let participant =[];  // declarer l'Objet qui va contenir le nom, la date, id d'une personne




function AjoutListe() {
    var nom_participant= document.getElementById("source").value;
    var date1=fullDate();
    
    var user = new Person(nom_participant,date1);

    function Person(nom_participant,date1)
    {
      this.nom_participant=nom_participant;
      this.date1=date1;

    }
   participant.push(user);
   console.log("les participants",participant);
// creer le tableau
   var table_user = document.getElementById("table1");


var tr_user=document.createElement("tr");

var td_user_nom=document.createElement("td")
var td_user_time=document.createElement("td");   
var td_user_bouton=document.createElement("td");

var btn_passer=document.createElement("button");

tr_user.className="tr_demandant_base";
td_user_nom.className="td_nom_demandant_base";
td_user_time.className="td_time_demandant_base";
btn_passer.className="btn_passer_demandant_base";

btn_passer.textContent="Je passe mon tour";

for(var i=0; i<participant.length;i++){
  td_user_nom.textContent=participant[i].nom_participant;
  td_user_time.textContent=participant[i].date1;

  td_user_bouton.appendChild(btn_passer);

  table_user.appendChild(tr_user);
  table_user.appendChild(td_user_nom);
  table_user.appendChild(td_user_time);
  table_user.appendChild(td_user_bouton);
}
   // remplir tableau

//console.log(date1);

  }

function fullDate(){

  const date = new Date();      //format date parsing 
  var annee= date.getFullYear();
  var mois=addZero(date.getMonth()+1);
  var jour=addZero(date.getDay());
  var heure=addZero(date.getHours());
  var minutes=addZero(date.getMinutes());
  var secondes=addZero(date.getSeconds());

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }


  var date_entiere = jour+"/"+mois+"/"+annee+", "+heure+":"+minutes+":"+secondes;
  console.log(fullDate);
  return date_entiere;
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
