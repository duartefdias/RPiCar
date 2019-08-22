const Gpio = require('onoff').Gpio
const servo = new Gpio(14, 'out')

module.exports = app => {
    app.get('/servoTest', function(req, res){
        console.log('Toogling signal of servo on GPIO14')
        if (servo.readSync() === 0) {
            console.log('Signal HIGH at GPIO14')
            servo.writeSync(1); //set output to 1 i.e turn servo on
          } else {
            console.log('Signal LOW at GPIO14')
            servo.writeSync(0); //set output to 0 i.e. turn servo off 
         }
         console.log('Exiting servo toogle route')
         console.log('\n')
    })
}