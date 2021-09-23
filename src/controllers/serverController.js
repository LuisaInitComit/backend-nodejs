class ServerController{
    constructor(){

    }
    register(req, res){
        console.log("Petición exitosa");
        res.status(403).json({message: "Conexión exitosa"});
    }
}
exports.default = ServerController;