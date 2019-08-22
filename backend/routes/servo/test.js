const Gpio = require('pigpio').Gpio
const servo = new Gpio(10, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servoTest/:servoValue', function(req, res){
        console.log('Toogling signal of servo on GPIO10')
        console.log('Servo input: ' + req.params.servoValue)
        servo.servoWrite(req.params.servoValue)
        res.send('Sent servo value: ' + req.params.servoValue)
    })
}