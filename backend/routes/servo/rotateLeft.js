const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servo-left', function(req, res){
        console.log('LEFT -> servo on GPIO10')
        console.log('Servo input: ' + req.params.servoValue)
        servo.servoWrite(2000)
        res.send('Set servo angle to 2000')
    })
}