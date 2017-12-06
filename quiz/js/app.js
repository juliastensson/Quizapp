var fraga = document.getElementById("fraga"); 
console.log(fraga.innerHTML);
var knapp = document.getElementById(alternativ1); 
knapp.addEventListener("click", function() {
console.log("Det var rätt!")
fraga.innerHTML = "Hoppsan hejsan"
} ); 