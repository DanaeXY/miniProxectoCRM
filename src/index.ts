/**
 * @import {Comunicacion} from "./clases/Comunicacion"
 */
import { Comunicacion } from "./clases/Comunicacion";
//import fondo from "./fondoBueno.png";
import './css/main.css'; // Temos que integrar o CSS para que webpack o compile

/**
 * @function main función que realiza a carga de todo o programa
 * contén diferentes estructuras if, as cales fan que determinen
 * o endpoint que vai ler
 */
function main():void{
    
// location.pathname localizo o 'endpoint'
if(location.pathname == "/"){
    console.log("estou en inicio")
}
/**
 * @param {location.pathname} == "/logueo"
 */
if(location.pathname == "/logueo"){
    console.log("estou en /logueo")
}
/**
 * @param {location.pathname} == "/paxina-app"
 */
if(location.pathname == "/paxina-app"){
    const refBotonGET: HTMLButtonElement = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement = document.querySelector("#solicitudePOST")
    console.log("refboton")
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    

    /**
     * @function  refBotonGET.addEventListener
     */
    refBotonGET.addEventListener("click",async () =>{
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
    /**
     * @function refBotonPOST.addEventListener
     */
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
if(location.pathname == "/recibo-datos-do-servidor"){
    console.log("estou document.querySelector")
    console.log("document.querySelector ",document.body)
}
}

main()