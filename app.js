//importacao dos modulos
const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const bodyparser = require('body-parser')
const Post = require('./models/Post')

//config do templete
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//config body-parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//rotas da aplicacao
app.get('/', function (req,res ) {
   
  //funcao post que retorna os dados do banco de dados 
  Post.findAll({ raw: true}).then(function(posts) {
    res.render('home', {posts: posts})
  })
})

//pag onde o formulario sera exibido
app.get('/form', function (req, res) {
  res.render('formulario')
})

//method post do formulario: enviado e salvando os dados no formulario
//redirecionando p/ pag home
app.post('/add', function (req, res) {
 Post.create({
  titulo : req.body.titulo,
  conteudo : req.body.conteudo
 }).then(function() {
  res.redirect('/')
 }).catch(function(erro){
  res.send('houve um erro: '+ erro)
 })
})

//delet os dados do db e redireciona para a rota home:
app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send('esta postagen na existe')
  })
})

app.listen(8081);