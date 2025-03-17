/**
 * @author Pepito Gutierrez
 * @class Comunicacion
 * @method metodoGet
 * @method metodoPost
 */

export class Comunicacion{
    
    static datos: Object;
    /**
     * @method metodoGet que fai un GET
     * @param endpoint será un endpoint de tipo texto
     */
    static async metodoGet(endpoint: string){
        console.log("this.endpoint ",endpoint)
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    /**
     * @method metodoPost é estático que fai un POST
     * @param endpoint  será un endpoint de tipo texto
     */
    static async metodoPost(endpoint: string){
        type datosObxeto = {
            dato1: string,
            dato2: string,
            dato3: number
        }
        
        let datosEnvio: datosObxeto = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        }
    
        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(datosEnvio)
        }
        let resposta = await fetch(endpoint,obxetoEnvio);

        this.datos = await resposta.json();
        console.log("estou en Comuniccion ", this.datos)
    }
    /**
     * @method respostaServidor que devolve os datos
     * @returns devolve datos
     */
    static get respostaServidor(){
        return this.datos
    }
}

