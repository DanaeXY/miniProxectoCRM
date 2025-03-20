import { Comunicacion } from "./clases/Comunicacion";
import "./css/paxina.settings/index.css";
import './css/main.css'; // Integración del CSS para Webpack

console.log("✅ CSS Importado correctamente");

if (location.pathname == "/paxina-app") {
    const refBotonGET: HTMLButtonElement = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement = document.querySelector("#solicitudePOST");

    // INTRODUZCO DOS BOTONES SIMULANDO 'EVENTOS'
    // UN POST
    // UN GET 

    refBotonGET.addEventListener("click", async () => {
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS EL DATO QUE LLEGA DEL SERVIDOR PARA PINTAR
    });

    refBotonPOST.addEventListener("click", async () => {
        let endpoint = "/envio-datos-o-servidor"
        await Comunicacion.metodoPost(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS EL DATO QUE LLEGA DEL SERVIDOR PARA PINTAR
    });
}

// Asegurar que Webpack recarga el CSS sin necesidad de recargar la página
declare const module: any;
if (module.hot) {
    module.hot.accept("./css/paxina.settings/index.css", () => {
        console.log("🔄 CSS actualizado automáticamente");
    });
}
