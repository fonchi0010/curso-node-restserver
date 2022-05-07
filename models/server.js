const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        this.middlewares();
        this.routes();
    }

    middlewares()
    {
        //Cors
        this.app.use(cors());

        //Parseo de Datos

        this.app.use( express.json() );

        //Directorio Público
        this.app.use( express.static('public'));
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en puerto', this.port);
        });

    }

}


module.exports = Server;