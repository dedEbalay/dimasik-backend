const { Sequelize } = require('sequelize');


module.exports = new Sequelize(
    process.env.DB_NAME, // Название Базы данных
    process.env.DB_USER, // Имя пользователя
    process.env.DB_PASSWORD, // Пароль от Базы данных
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)