const express = require('express');
const { pokemonRouter } = require('./routes/pokemon');
const cors = require('cors');

// Crear clase
class Server {
    constructor() { // Características básicas de la clase
        this.app = express();
        this.port = 3000;
        this.seeders();
        this.middlewares();
        this.routes();
    }
     
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/pokemon', pokemonRouter); // Rutas para Pokémon
    }

    seeders() {
        require('./seeds/pokemon').pokemonsSeeder(); // Ejecutar seeders de Pokémon
        // Puedes agregar un seeder para movimientos si lo necesitas
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port ' + this.port);
        });
    }
}

module.exports = {
    Server
};