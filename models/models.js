const sequelize = require('../db.js'),
      { DataTypes } = require('sequelize');

const User = sequelize.define('USER', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
});

const News = sequelize.define('NEWS', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    imgUrl: {type: DataTypes.STRING, unique: true}
})

User.hasMany(News)
News.belongsTo(User)

module.exports = {
    User,
    News
}