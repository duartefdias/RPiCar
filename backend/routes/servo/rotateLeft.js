const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servo-left', function(req, res){
        console.log('Servo position: ' + servo.getServoPulseWidth())
        console.log('LEFT -> servo on GPIO10')
        servo.servoWrite(2000)
        console.log('Servo position: ' + servo.getServoPulseWidth())
        console.log('\n')
        res.send('Set servo angle to 2000')
    })
}