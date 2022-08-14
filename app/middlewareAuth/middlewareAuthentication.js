var jwt = require('jsonwebtoken')
var config = require('config')

module.exports = {
    verification(req, res, next) {
        let token = req.headers['x-access-token']
        if(!token){
            return res.status(401).send({ auth: false, message: 'Não proveu token de autenticação.' })
        } 
        
        // console.log(process.env.SECRET)
        // console.log(token)
        jwt.verify(token, config.SECRET, function(err, decoded) {
            // console.log(err)
            if(err) {
                return res.status(500).send({ auth: false, message: 'Falha ao autenticar token.'})
            }
            next()
        })
    }
}