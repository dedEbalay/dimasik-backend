require('dotenv').config()
const express = require('express');
const sequelize = require('./db.js');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () =>  {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();