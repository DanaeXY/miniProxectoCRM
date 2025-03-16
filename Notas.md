# Observacións TYPEDOC
> Antes de ler este documento deberás ter lido o proxecto de 
[Inicio con TypeDoc]("[text](https://github.com/cursosisraelsp/InicioConTypeDoc)")

Estamos a comenzar a usar `TypeDoc`, creamos un servidor aparte `serverDocumentacionFront.js`.

Este servizo actuará para tratar de visualizar a documentación do proxecto de `typescript`.

```javascript
const express = require("express");
const path = require("path");

const app = express();

// USE

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "docsFRONT")));

//START SERVER
app.listen(5000, function () {
 console.log("Server documentacion FRONT");
});
```
> Date conta que este `servizo` está no porto **5000**, e ten como carpeta compartida **docsFRONT**

Para visualizalo, simplemente deberías executar:

```bash
node serverDocumentacionFront.js
```

## Comentarios 
> Agreguei diferentes comentarios nos diferentes arquivos `typescript` para poder lelos
## Typedoc

Creo unha nova carpeta cada vez que xenere a documentación, chamada `docsFRONT`.

Isto está configurado en `tsconfig.json` do seguinte xeito:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "module": "NodeNext",
    "target": "ES2022",
    "moduleResolution":"nodenext"
  },
  "typedocOptions": {
    "entryPoints": [
      "src/**/*.ts" // <--- take everything from this location
    ],
    "out": "docsFRONT/" // <--- output directory
  }
}
```