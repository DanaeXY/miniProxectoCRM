/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/Comunicacion.ts":
/*!************************************!*\
  !*** ./src/clases/Comunicacion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comunicacion = void 0;
class Comunicacion {
    static datos;
    static async metodoGet(endpoint) {
        console.log("this.endpoint ", endpoint);
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    static async metodoPost(endpoint) {
        let datosEnvio = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        };
        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datosEnvio)
        };
        let resposta = await fetch(endpoint, obxetoEnvio);
        this.datos = await resposta.json();
    }
    static get respostaServidor() {
        return this.datos;
    }
}
exports.Comunicacion = Comunicacion;


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Comunicacion_1 = __webpack_require__(/*! ./clases/Comunicacion */ "./src/clases/Comunicacion.ts");
//import fondo from "./fondoBueno.png";
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css"); // Temos que integrar o CSS para que webpack o compile
if (location.pathname == "/paxina-app") {
    const refBotonGET = document.querySelector("#solicitudeGET");
    const refBotonPOST = document.querySelector("#solicitudePOST");
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    refBotonGET.addEventListener("click", async () => {
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion_1.Comunicacion.metodoGet(endpoint);
        console.log(Comunicacion_1.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
    refBotonPOST.addEventListener("click", async () => {
        let endpoint = "/envio-datos-o-servidor";
        await Comunicacion_1.Comunicacion.metodoPost(endpoint);
        console.log(Comunicacion_1.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2J1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxLQUFLLENBQVM7SUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBZ0I7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBZ0I7UUFPcEMsSUFBSSxVQUFVLEdBQWdCO1lBQzFCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksV0FBVyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFDLGtCQUFrQjthQUNwQztZQUNELElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUNsQztRQUNELElBQUksUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXZDLENBQUM7SUFFRCxNQUFNLEtBQUssZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckIsQ0FBQztDQUNKO0FBdENELG9DQXNDQzs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTEEsd0dBQXFEO0FBQ3JELHVDQUF1QztBQUN2QyxnRUFBd0IsQ0FBQyxzREFBc0Q7QUFFL0UsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLGFBQWEsRUFBQyxDQUFDO0lBQ25DLE1BQU0sV0FBVyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEYsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFFakYsOENBQThDO0lBQzlDLFVBQVU7SUFDVixVQUFVO0lBR1YsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxLQUFLLElBQUksRUFBRTtRQUM1QyxJQUFJLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztRQUMzQyxNQUFNLDJCQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMseURBQXlEO0lBQzdELENBQUMsQ0FBQztJQUNGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsS0FBSyxJQUFHLEVBQUU7UUFDNUMsSUFBSSxRQUFRLEdBQUcseUJBQXlCO1FBQ3hDLE1BQU0sMkJBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyx5REFBeUQ7SUFDN0QsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2NsYXNlcy9Db211bmljYWNpb24udHMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY3NzL21haW4uY3NzP2MwOGUiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tdW5pY2FjaW9ue1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZGF0b3M6IE9iamVjdDtcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb0dldChlbmRwb2ludDogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZW5kcG9pbnQgXCIsZW5kcG9pbnQpXHJcbiAgICAgICAgbGV0IGRhdG9TZXJ2aWRvciA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLmRhdG9zID0gYXdhaXQgZGF0b1NlcnZpZG9yLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgbWV0b2RvUG9zdChlbmRwb2ludDogc3RyaW5nKXtcclxuICAgICAgICB0eXBlIGRhdG9zT2J4ZXRvID0ge1xyXG4gICAgICAgICAgICBkYXRvMTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXRvMjogc3RyaW5nLFxyXG4gICAgICAgICAgICBkYXRvMzogbnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRvc0VudmlvOiBkYXRvc09ieGV0byA9IHtcclxuICAgICAgICAgICAgZGF0bzE6IFwibWFyaWFub1wiLFxyXG4gICAgICAgICAgICBkYXRvMjogXCJwZXBpdG9cIixcclxuICAgICAgICAgICAgZGF0bzM6IDVcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgb2J4ZXRvRW52aW8gPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0b3NFbnZpbylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsb2J4ZXRvRW52aW8pO1xyXG4gICAgICAgIHRoaXMuZGF0b3MgPSBhd2FpdCByZXNwb3N0YS5qc29uKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcmVzcG9zdGFTZXJ2aWRvcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdG9zXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IHsgQ29tdW5pY2FjaW9uIH0gZnJvbSBcIi4vY2xhc2VzL0NvbXVuaWNhY2lvblwiO1xyXG4vL2ltcG9ydCBmb25kbyBmcm9tIFwiLi9mb25kb0J1ZW5vLnBuZ1wiO1xyXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJzsgLy8gVGVtb3MgcXVlIGludGVncmFyIG8gQ1NTIHBhcmEgcXVlIHdlYnBhY2sgbyBjb21waWxlXHJcblxyXG5pZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9wYXhpbmEtYXBwXCIpe1xyXG4gICAgY29uc3QgcmVmQm90b25HRVQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb2xpY2l0dWRlR0VUXCIpO1xyXG4gICAgY29uc3QgcmVmQm90b25QT1NUOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29saWNpdHVkZVBPU1RcIilcclxuICAgIFxyXG4gICAgLy8gSU5UUk9EVVpDTyBET1VTIEJPVMOTTlMgU0lNVUxBTkRPICdFVkVOVE9TJyBcclxuICAgIC8vIFVOIFBPU1RcclxuICAgIC8vIFVOIEdFVCBcclxuICAgIFxyXG5cclxuICAgIHJlZkJvdG9uR0VULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFzeW5jICgpID0+e1xyXG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL3JlY2liby1kYXRvcy1kby1zZXJ2aWRvclwiO1xyXG4gICAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9HZXQoZW5kcG9pbnQpXHJcbiAgICAgICAgY29uc29sZS5sb2coQ29tdW5pY2FjaW9uLnJlc3Bvc3RhU2Vydmlkb3IpXHJcbiAgICAgICAgLy8gVVRJTElaQVLDjUFNT1MgTyBEQVRPIFFVRSBDSEVHQSBETyBTRVJWSURPUiBQQVJBIFBJTlRBUlxyXG4gICAgfSlcclxuICAgIHJlZkJvdG9uUE9TVC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhc3luYyAoKT0+e1xyXG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL2VudmlvLWRhdG9zLW8tc2Vydmlkb3JcIlxyXG4gICAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9Qb3N0KGVuZHBvaW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKENvbXVuaWNhY2lvbi5yZXNwb3N0YVNlcnZpZG9yKVxyXG4gICAgICAgIC8vIFVUSUxJWkFSw41BTU9TIE8gREFUTyBRVUUgQ0hFR0EgRE8gU0VSVklET1IgUEFSQSBQSU5UQVJcclxuICAgIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9