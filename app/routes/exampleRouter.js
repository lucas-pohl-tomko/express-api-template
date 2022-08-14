const { Router } = require('express')
// const Controller = require('../controllers')
// const auth = require('../middlewareAuth/middlewareAuthentication')
const Service = require('../services/index.js')
const router = Router()

//Rotas GET

router.get('/example', async (req, res)=>{
    try {
        res.status(200).json({response:"All right!"})
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Error'
        })
    }
})

//Rotas POST

//Rotas PUT

//Rotas DELETE

module.exports = router
