
import { Comunicacion } from "./clases/Comunicacion";
//import fondo from "./fondoBueno.png";
import './css/main.css'; // Temos que integrar o CSS para que webpack o compile

// location.pathname localizo o 'endpoint'
if(location.pathname == "/"){
    console.log("estou en inicio")
}
if(location.pathname == "/logueo"){
    console.log("estou en /logueo")
}
if(location.pathname == "/paxina-app"){
    const refBotonGET: HTMLButtonElement = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement = document.querySelector("#solicitudePOST")
    console.log("refboton")
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    

    refBotonGET.addEventListener("click",async () =>{
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
    refBotonPOST.addEventListener("click",async ()=>{
        let endpoint = "/envio-datos-o-servidor"
        await Comunicacion.metodoPost(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
}

if(location.pathname == "/invoices"){
    console.log("estou en invoice")
}
