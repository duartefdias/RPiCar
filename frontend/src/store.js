var Store = {

    RPiLastIpDigit : 0,

    getRPiLastIpDigit: function() {
        return this.RPiLastIpDigit
    },

    setRPiLastIpDigit: function(digit) {
        this.RPiLastIpDigit = digit
    }

}

export default Store