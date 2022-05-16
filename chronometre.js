/* Chronomètre */
var heure = document.getElementById('heure');
var minute = document.getElementById('minute');
var seconde = document.getElementById('seconde');

/* Les boutons */
var start = document.getElementById('start');
var stopp = document.getElementById('stop');
var reset = document.getElementById('reset');

var compteSeconde = 0;
var compteMinute = 0;
var compteHeure = 0

function decompteseconde(){
    compteSeconde++;
    seconde.innerHTML = compteSeconde + " sec";              
    
    if(compteSeconde == 60){
        compteSeconde=0;
        seconde.innerHTML = compteSeconde + " se"; 
        compteMinute++;
        minute.innerHTML = compteMinute + " min";

       
    }
    else if(compteMinute==60){
        compteMinute=0;
        minute.innerHTML = compteMinute + " min"; 
        compteHeure++;
        heure.innerHTML = compteHeure + " h";
    }
  
}


 start.addEventListener('click', startEvent => {
    var objectTimer = setInterval(decompteseconde,1000);
    start.disabled=true;
    stopp.addEventListener('click', event =>{
        clearInterval(objectTimer);
    start.disabled=false;
    });

});
    
reset.addEventListener('click', event =>{
    location.reload();
});