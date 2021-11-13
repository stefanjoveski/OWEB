function updateClock( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var Day=currentTime.getDate();
  var Month=currentTime.getMonth();
  var Year=currentTime.getFullYear();

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  currentHours= (currentHours < 10 ? "0" : "") + currentHours;
  switch(Month)
  {
    case (0): Month="Jan"; break;
    case (1): Month="Feb"; break;
    case (2): Month="Mar"; break;
    case (3): Month="Apr"; break;
    case (4): Month="May"; break;
    case (5): Month="Jun"; break;
    case (6): Month="Jul"; break;
    case (7): Month="Aug"; break;
    case (8): Month="Sep"; break;
    case (9): Month="Oct"; break;
    case (10): Month="Nov"; break;
    case (11): Month="Dec"; break;
    
  }

  var currentTimeString ="<p>"+Day+"-"+Month+"-"+Year+" "+ currentHours + ":" + currentMinutes + ":" + currentSeconds+"</p>" ;
  output=document.getElementById("clock");
  output.innerHTML = currentTimeString;
  setTimeout(updateClock,1000);
}
window.addEventListener("load",updateClock,false);

function generatePopup() {
 
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup'); 
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title');
    const title = document.createElement('h2');
    title.textContent = "Thank you for leaving your feedback!";
    titleContainer.appendChild(title);
    popupContainer.appendChild(title);
    const buttonContainer=document.createElement('a');
    button=document.createTextNode("Continue");
    buttonContainer.appendChild(button);
    buttonContainer.setAttribute("style","float:right");
    buttonContainer.setAttribute("href","gallery.html");
    buttonContainer.setAttribute("style","padding-left:80%;padding-bottom:5%");
    popupContainer.appendChild(buttonContainer);
    popupContainer.setAttribute("style","align-content:center;font-size: 1.125em;font-weight: bold;")
    document.body.appendChild(popupContainer);
  }

clicked=0
function dark()
{ 
 
  if(clicked==0)               
   {document.body.setAttribute( "style", "background-color: rgb(118, 175, 221)" );
        clicked=1;  
    }
  else
  {document.body.setAttribute( "style", "background-color: white" );
        clicked=0; 
  }

}

function myFunction(kade,naslov,text) {
    var currentTime = new Date ( );
    var x = document.getElementById(text).value;
    var y=document.getElementById(naslov).value;
    var content="<p style='color:rgb(0, 78, 141); font-size: larger;font-weight: bolder; padding-left: 5%;'>"+y+"</p><p style='color: black;font-size: larger;padding-left: 5%;'>"+x+"</p>";
    document.getElementById(kade).innerHTML = content+"<p style='color:rgb(0, 78, 141); padding-left: 5%;'>"+currentTime.getDate ( )+"-"+(currentTime.getMonth ()+1) +"-"+currentTime.getFullYear ( )+"<\p>";
}

var myWindow;
function openwin(koj) {
    myWindow = window.open(koj,"My window", "width=400, height=200");
    myWindow.focus();
}

var comments = [];
function loadKom(kade, komentar, broj) {
    if(comments[broj] == null){
        comments[broj] = 0;
    }

    var kom = document.getElementById(komentar).value;
    document.getElementById(komentar).value="";
    comments[broj]++;

    var markup = document.createElement("LI");
    markup.innerHTML = (username+": "+kom);
    markupLoad = username+": "+kom;

    localStorage.setItem(("komentar"+broj+comments[broj]), markupLoad);
    localStorage.setItem(broj, comments[broj]);

    document.getElementById(kade).append(markup);
}

var count = [];
var k;
function funk(where, k){
    if(count[k] == null){
        count[k] = 0;
    }
    count[k]++;
    localStorage.setItem((1000+k), count[k]);
    document.getElementById(where).innerHTML = count[k];
}

function deleteKom(pom,kade) {
    var element=document.getElementById(pom);
    localStorage.removeItem(element);
    loadKom(kade);
}

function myGallery(){
    for(var i=1; i<=2; i++){
        if(localStorage.getItem(i) != null){
            for(var j=1; j<=localStorage.getItem(i); j++){
                if(localStorage.getItem(("komentar"+i+j)) != null){
                    var whereStart = "kade" + i;
                    var markupLoad = localStorage.getItem(("komentar"+i+j));
                    var markup = document.createElement("LI");
                    markup.innerHTML = markupLoad;
                    document.getElementById(whereStart).append(markup);
                }
            }
            comments[i] = localStorage.getItem(i);
        }
    } 

    for(var i=0; i<2; i++){
      if(localStorage.getItem(i+1000) != null){
          count[i] = localStorage.getItem(1000+i);
          var kadeLajk = "like" + i;
          document.getElementById(kadeLajk).innerHTML = count[i];
      }
    }
}

function voting(kade, odkade){
    var x = document.getElementById(odkade).value;
    var nova = (document.getElementById(kade).value + x)/2;
    document.getElementById(kade).value=  nova;
}