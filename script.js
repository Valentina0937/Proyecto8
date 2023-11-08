
let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoStop");
let botonSonido = new Audio ('../sound/allWant.mp3');



function bailar(){
    if(esqueleto == "off"){
        esqueleto = "on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
        })
        console.log("On");
    } else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
        console.log("Off");
    }
}
function pause(){
    
}






function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite)-ahora +1000)/1000;
    //:Floor acerca a entero 
    segundosFaltantes = ("0" + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ("0" + Math.floor(tiempoFaltante /60 % 60)).slice(-2);
    horasFaltantes = ("0" + Math.floor(tiempoFaltante /3600 % 24)).slice(-2);
    diasFaltantes = ("0" + Math.floor(tiempoFaltante /(3600 * 24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    } 
};

//console.log(obtenerTiempoFaltante("Dec 25 2023 00:00:00 GMT-0500"));

function cuentaRegresiva(tiempoFaltante,mensaje){
    
    const dias = document.getElementById('dia')
    const horas = document.getElementById('hora')
    const minutos = document.getElementById('minuto')
    const segundos = document.getElementById('segundo')

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        //e.innerHTML = `${t.diasFaltantes}d${t.horasFaltantes}h ${t.minutosFaltantes}m${t.segundosFaltantes}s`;
        let dia = t.diasFaltantes
        let hora = t.horasFaltantes
        let minuto = t.horasFaltantes
        let segundo = t.horasFaltantes
        dias.innerHTML = `${t.diasFaltantes}`
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`

        if(t.tiempoFaltante <= 1){
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
            
            dias.innerHTML = `00`
            horas.innerHTML = `00`
            minutos.innerHTML = `00`
            segundos.innerHTML = `00`
            if(esqueleto == "off"){
                esqueleto = "on"
                esqueletoStop.classList.add("on");
                    botonSonido.play();
                
                console.log("On");
            } else {
                esqueleto = "off"
                esqueletoStop.classList.remove("on");
                    botonAudio.pause();
                
                console.log("Off");
            }
        }
    },1000)
};

cuentaRegresiva('Nov 08 2023 14:07:00 GMT-0500','Feliz Navidad');