// //conectando com o mysql: npm i --save sequelize && npm i --save mysql2
const Sequelize = require('sequelize');
//config sequelize
const sequelize = new Sequelize('formulario', 'root', 'sua senha mysql', {
    host: "localhost",
    dialect:'mysql'
 });
// exportando o sequelize p/ Post.js
 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
 }
