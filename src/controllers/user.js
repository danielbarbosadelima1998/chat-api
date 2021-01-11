const baseController = require('./baseController')
const { user } = require('../models')

class UserController extends baseController {
  constructor() {
    super('/users', user)
  }

  routes() {
    const route = super.routes();
    // rotas internas

    return route;
  }
}

module.exports = UserController;