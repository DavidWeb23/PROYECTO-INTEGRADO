//Boton para Activar el Cronometro
$("#botoncrono").click(function(){
    $("#reloj").html("<section><p>        <span class=\"d-none\" id=\"days\"></span><span class=\"d-none\" id=\"hours\"></span><span id=\"minutes\"></span> minutos / <span id=\"seconds\"></span> segundos    </p></section>")
//===
// VARIABLES
//===
crono=$("input[id=duracion]:checked").val()
console.log(crono)
DATE_TARGET = new Date();
if(crono==1){
    DATE_TARGET.setMinutes(DATE_TARGET. getMinutes() + 1);    
}
if(crono==15){
    DATE_TARGET.setMinutes(DATE_TARGET. getMinutes() + 15);    
}
if(crono==30){
    DATE_TARGET.setMinutes(DATE_TARGET. getMinutes() + 30);    
}
if(crono==45){
    DATE_TARGET.setMinutes(DATE_TARGET. getMinutes() + 45);    
}
DATE_TARGET.getMinutes();
// DOM for render
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;

    console.log(DURATION)
    const AHORA = new Date()
    if(DURATION<0 && DURATION>-1000){
        alert("SE ACABÓ EL TIEMPO.")  
    }
    if(DURATION<=1000){
        $("#reloj").html("<section><p>        <span>Se acabo el tiempo. Espero que haya salido bien la prueba.</span></p></section>") 
        
    }
    
}

//===
// INIT
//===
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});