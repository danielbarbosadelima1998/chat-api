const { Message, Room, User } = require('./controllers');

module.exports = [
    new Message().routes(),
    new Room().routes(),
    new User().routes(),
]