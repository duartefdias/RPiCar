const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servo-right', function(req, res){
        console.log('Servo position: ' + servo.getServoPulseWidth())
        console.log('RIGHT -> servo on GPIO10')
        servo.servoWrite(800)
        console.log('Servo position: ' + servo.getServoPulseWidth())
        console.log('\n')
        res.send('Set servo angle to 800')
    })
}