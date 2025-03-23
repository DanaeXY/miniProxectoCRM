const express = require("express");
const path = require("path");
const { paxinaNoUser,paxinaLogueo, paxinaInvoices, paxinaCesta, paxinaCustomers, paxinaGraficas, paxinaNewProduct, paxinaHome, paxinaAxustes } = require("./controladores/views");
const { logueo, isUser } = require("./middleware");
const { paxinaApiHome } = require("./controladores/views.texto");

const app = express();
//dontenv
require('dotenv').config(); 
// USE
// É para interpretar datos do formulario
app.use(express.urlencoded({extended: true}));
// É para interpretar datos json 
app.use(express.json())

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));
//### GETTERS
/**
 * @function get 
 * @param endpoint '/recibo-datos-do-servidor'
 * @returns mensaxe obxeto
 *
 */

app.get("/logueo",(req,res)=>{
    paxinaLogueo(req,res)
})

//paxina no-user é utilizada en caso de que non se envíe unha mensaxe 
app.get("/no-user",(req,res)=>{
    paxinaNoUser(req,res)
})

//### POST
app.post("/logueandome",logueo)
//home-emerxencia
app.get("/api/home",isUser,paxinaApiHome)
app.get("/home",(req,res)=>{
    paxinaHome(req,res)
})
// GETTERS PáXINAS
app.get("/invoices",(req,res)=>{
    paxinaInvoices(req,res)
})
app.get("/cesta",(req,res)=>{
    paxinaCesta(req,res)
})
app.get("/clientes",(req,res)=>{
    paxinaCustomers(req,res)
})
app.get("/graficas",(req,res)=>{
    paxinaGraficas(req,res)
})
app.get("/productos",(req,res)=>{
    paxinaNewProduct(req,res)
})
app.get("/axustes",(req,res)=>{
    paxinaAxustes(req,res)
})

//##########
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});