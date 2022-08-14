const example = require('./exampleRouter')

module.exports = (app) => {
    app.use('/api',example)
}
