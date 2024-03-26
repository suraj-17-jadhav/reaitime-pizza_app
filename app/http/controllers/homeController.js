const Menue = require('../../models/menue')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Menue.find()
            return res.render('home', { pizzas: pizzas })
        }
    }
}

module.exports = homeController