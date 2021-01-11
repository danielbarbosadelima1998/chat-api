const baseController = require('./baseController')
const { room } = require('../models')

class RoomController extends baseController {
  constructor() {
    super('/rooms', room)
  }

  async store (req, res){
    // console.log(req)
    const { userid } = req.headers;
    console.log('body --> ', req.body)
    const response = await room.create(req.body)

    console.log('response ---> ', response)
    response.addUser(response, { through: { userId: userid}})
  console.log('userID', userid)
  return res.json({data:'ok'})
  }
  routes() {
    const route = super.routes();
    // rotas internas
    // route.post('/createRoom', this.store.bind(this))
    return route;
  }
}

module.exports = RoomController;