const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servoTest', function(req, res){
        console.log('Toogling signal of servo on GPIO14')
        servo.servoWrite(1900)
        res.send('Done')
    })
}