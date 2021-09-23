//Importar express
const express = require('express');
//Importar serverRouter
const serverRouter = require('./routers/serverRouter');

class Server{
    //Constructor
    constructor(){
        this.app = express();
        //Montar un servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que se manejará solicitudes en formato Json
        this.app.use(express.json());
        //Crear ruta de inicio
        const router = express.Router();
        router.get('/', (req, res)=>{
            res.status(200).json({
                message: "Conexión Exitosa",
            });
        });
        //Añadir la ruta al servidor
        const objServerR = new serverRouter.default();
        this.app.use(objServerR.router);
        //Añadir la ruta creada al servidor
        this.app.use(router);
        //Levantar el servidor / poner el servidor a la escucha
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor corriendo sobre el puerto => ", this.app.get('port'));
        });
    }
}

const objServer = new Server();