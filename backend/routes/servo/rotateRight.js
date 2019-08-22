const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servo-right', function(req, res){
        console.log('RIGHT -> servo on GPIO10')
        console.log('Servo input: ' + req.params.servoValue)
        servo.servoWrite(800)
        res.send('Set servo angle to 800')
    })
}