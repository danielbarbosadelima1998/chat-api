const baseController = require('./baseController')
const { message } = require('../models/')

class MessageController extends baseController {
  constructor() {
    super('/messages', message)
  }

  routes() {
    const route = super.routes();
    // rotas internas

    return route;
  }
}

module.exports = MessageController