function action(){

var motsaisie = document.getElementById('motsaisie').value;

var motnorm = document.getElementById('mot_norm');

var min = motsaisie.toLowerCase();

var maj = motsaisie.toUpperCase();

var minu = document.getElementById('minu');
minu.innerHTML = min;
console.log(min);

var maju = document.getElementById('maju');
maju.innerHTML = maj;
console.log(maj);

motnorm.innerHTML = "<span>" + motsaisie.bold() + "</span>" ;

var voy = document.getElementById('nvoy');
var con = document.getElementById('ncons');
var v = 0;
var c = 0;

for(var n=0 ; n<motsaisie.length ; n++){
  if(motsaisie[n]=="a" || motsaisie[n]=="e" || motsaisie[n]=="i" || motsaisie[n]=="o" || motsaisie[n]=="u" || motsaisie[n]=="y"){
    v++;
    }
  else{
    c++;
  }
}

con.innerHTML = "vous avez " + c + " consonne(s)";
voy.innerHTML = "vous avez " + v + " voyelle(s) ";

var inverse = document.getElementById('motinvers');

inverse.innerHTML = motsaisie.split("").reverse().join("");

console.log(inverse);

var palin = document.getElementById('palindrome');

if(motsaisie == motsaisie.split("").reverse().join("")){

  palin.innerHTML = "ceci est un palindrome.";
}

else{
  palin.innerHTML = "ceci n'est pas un palindrome.";
}

var histo = document.getElementById('histo1');

histo1.innerHTML = motsaisie + "<br>" + histo1.innerHTML;
}
function reset(){
var motsaisie = document.getElementById('mot_norm');
motsaisie.innerHTML = "";
var motnorm = document.getElementById('mot_norm');
motnorm.innerHTML ="";
var minu = document.getElementById('minu');
minu.innerHTML = "";
var maju = document.getElementById('maju');
maju.innerHTML = "";
var voy = document.getElementById('nvoy');
var con = document.getElementById('ncons');
con.innerHTML ="";
voy.innerHTML ="";
var inverse = document.getElementById('motinvers');
inverse.innerHTML ="";
var palin = document.getElementById('palindrome');
palin.innerHTML ="";
}
