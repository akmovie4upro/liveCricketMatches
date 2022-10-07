const embeded = document.getElementById('embeded');
const score = document.getElementById('score');
const server = "https://3qgc.short.gy/Server"
const server1 = "https://3qgc.short.gy/Serveri";

const server2 = "https://3qgc.short.gy/Serverii";
const server3 = "https://3qgc.short.gy/Serveriii";


const scoreBoard = document.getElementById('scoreBoard');
const showScoreTitle = document.getElementById('showScoreTitle');

embeded.src = server;

function serveri() {
  embeded.src = server1;
};



function serverii() {
  embeded.src = server2;
};



function serveriii() {
  embeded.src = server3;
};


//Live score ajex function




$(function() {
  // set cricbuzz.com live cricket score url.
  let url = "https://3qgc.short.gy/CricbuzzUrl";

  //let localhost = "http://localhost:8080/cricket-api/cri/cri.php?url=";
  
  // let localhost = "https://3qgc.short.gy/Localhost/cri.php?url=";
   
  let localhost = "https://cricket-api-cricbuzz.vercel.app/cri.php?url=";



  let apiData = localhost + url;


  // let apiData = "/liveCricketMatches/cricket.json";

  //http://localhost:8080/cricket-api/cri/cri.php?url=https://m.cricbuzz.com/cricket-commentary/52834/saur-vs-roi-irani-cup-irani-cup-2022

  //let localhost = "http://localhost:6001/cri.php?url=";


  getLiveScore(url);
  setInterval(function() { getLiveScore(url); }, 5000);

  function getLiveScore(url) {
    //$("#msg").html("Updating score..");
    $.getJSON(apiData, function(data) {
      console.log(data);
      $(".title").html(data['livescore']['title']);
      $(".update").html(data['livescore']['update']);
      $(".current").html(data['livescore']['current']);
      $(".runrate").html(data['livescore']['runrate']);

      //batsmanone

      $(".batsman").html(data['livescore']['batsman']);
      $(".batsmanrun").html(data['livescore']['batsmanrun']);
      $(".ballsfaced").html(data['livescore']['ballsfaced']);
      $(".fours").html(data['livescore']['fours']);
      $(".sixes").html(data['livescore']['sixes']);
      $(".sr").html(data['livescore']['sr']);


      //batsmantwo

      $(".batsmantwo").html(data['livescore']['batsmantwo']);
      $(".batsmantworun").html(data['livescore']['batsmantworun']);
      $(".batsmantwoballsfaced").html(data['livescore']['batsmantwoballsfaced']);
      $(".batsmantwofours").html(data['livescore']['batsmantwofours']);
      $(".batsmantwosixes").html(data['livescore']['batsmantwosixes']);
      $(".batsmantwosr").html(data['livescore']['batsmantwosr']);



      //bowlerone


      $(".bowler").html(data['livescore']['bowler']);
      $(".bowlerover").html(data['livescore']['bowlerover']);
      $(".bowlerruns").html(data['livescore']['bowlerruns']);
      $(".bowlerwickets").html(data['livescore']['bowlerwickets']);
      $(".bowlermaiden").html(data['livescore']['bowlermaiden']);



      //bowlertwo


      $(".bowlertwo").html(data['livescore']['bowlertwo']);
      $(".bowletworover").html(data['livescore']['bowletworover']);
      $(".bowlertworuns").html(data['livescore']['bowlertworuns']);
      $(".bowlertwowickets").html(data['livescore']['bowlertwowickets']);
      $(".bowlertwomaiden").html(data['livescore']['bowlertwomaiden']);


      // Others


      $(".partnership").html(data['livescore']['partnership']);


      $(".lastwicket").html(data['livescore']['lastwicket']);


      // $(".bowlertworuns").html(data['livescore']['bowlertworuns']);
      // $(".bowlertwowickets").html(data['livescore']['bowlertwowickets']);
      // $(".bowlertwomaiden").html(data['livescore']['bowlertwomaiden']);









      $(".recentballs").html(data['livescore']['recentballs']);

      $("#msg").html("");
    });
  }
});




// showLiveScore


function changeScoreTitle() {

  //  alert()

  if (scoreBoard.style.display == "block") {
    scoreBoard.className += "d-none";
  } else {



  }


}



//form-------------------------@-@-------------------


function passwordToggeles() {
  if (document.getElementById('Password').type === "password") {
    document.getElementById('Password').type = "text"
  } else {
    document.getElementById('Password').type = "password"
  }
}


const userId = "Ak6414119@";
const userPassword = "Adityakumar9708268593@";




function submitForm() {
  if (document.getElementById('UserId').value != userId || document.getElementById('Password').value != userPassword) {

    // alert("Details are incorrect");
    document.getElementById('incorrectDetails').classList = "alert alert-dark bg-danger text-light mt-3";

  } else {
    document.getElementById('mainContainer').classList = "container";

    document.getElementById('formContainer').classList = "d-none";

alert("Don't Refresh the Page.")

  }
}
