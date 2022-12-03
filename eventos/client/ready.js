const mongoose = require('mongoose');
const config = require('../../config/config.json');

module.exports = client => {
    //Nos conectamos a la base de datos

    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`☁ Conectado a la base de datos de MONGODB`.blue);
    }).catch((e) => {
        console.log(`☁ ERROR AL CONECTARSE A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err)
    })

    console.log(`Conectado como ${client.user.tag}`.green)
}