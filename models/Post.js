//importando o arquivo db.js
const db = require('./db')
 // definindo a tabela do banco de dados 
const Post = db.sequelize.define('formulario', {
    titulo: {
        type: db.Sequelize.STRING,
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
 
//exportando o Post p/ app.js
module.exports = Post

//ela linha de codigo so deve ser usada uma vez: 
//se for usada mais de uma ves vai recriar a tabela mais uma vez: cobrindo a primeira
// Post.sync({force: true})