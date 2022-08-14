const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const server = http.Server(app)
const routes = require('./app/routes')
const porta = process.env.PORT || config.PORT
const passport = require('passport')
const cors = require('cors')

app.use(
    cors({
        origin: [`http://localhost:${porta}/api`],
        methods: 'GET,HEAD,POST',
        credentials: true,
        exposedHeaders: ['Authorization', 'x-iisnode-logon_user', 'Token'],
    })
)

app.use(bodyParser.json({ limit: '500mb' }))

routes(app)

server.listen(porta, (error) => {
    if (error) {
        console.log('Ocorreu um erro ao rodar o servidor')
    } else {
        console.log(`Servidor Iniciado na Porta ${porta}`)
    }
})
