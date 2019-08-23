const Gpio = require('pigpio').Gpio
const servo = new Gpio(9, {mode: Gpio.OUTPUT})

module.exports = app => {
    app.get('/servo2Angle/:servoAngle', function(req, res){
        console.log('Setting servo pwm to: ' + req.params.servoAngle)
        servo.servoWrite(req.params.servoAngle)
        // res.send(req.params.servoAngle)
    })
}