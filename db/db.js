
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('La Base de datos ha sido conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectarse a la base de datos')
    }
}

module.exports = { dbConnection }