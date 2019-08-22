const Gpio = require('onoff').Gpio
const LED = new Gpio(4, 'out')

module.exports = app => {
    app.put('/toggleLed', function(req, res){
        console.log('Toogling led on GPIO4')
        if (LED.readSync() === 0) {
            console.log('Turning led on')
            LED.writeSync(1); //set output to 1 i.e turn led on
          } else {
            console.log('Turning led off')
            LED.writeSync(0); //set output to 0 i.e. turn led off 
         }
         console.log('Exiting led toogle route')
    })
}