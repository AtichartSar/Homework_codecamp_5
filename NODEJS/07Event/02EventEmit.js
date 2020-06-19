const EventEmitter = require('events')

class Em1 extends EventEmitter{
    emit1() {
        setInterval(() => this.emit('onesec', 11111), 1000);

    }
    emit2() {
        setInterval(() => this.emit('twosec', 2222), 2000);

    }
}
module.exports = Em1