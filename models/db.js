// //conectando com o mysql: npm i --save sequelize && npm i --save mysql2
const Sequelize = require('sequelize');

const sequelize = new Sequelize('formulario', 'root', '918273', {
    host: "localhost",
    dialect:'mysql'
 });
// exportando o sequelize p/ Post.js
 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
 }