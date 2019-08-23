<template>
        <v-container>
            <v-row justify="center">
                <v-col sm="3" md="2">
                    <v-btn @click="tiltLeft()" class="fill">UP</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col sm="3" md="2">
                    <v-btn @click="tiltLeft()" class="fill">DOWN</v-btn>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import axios from 'axios'
import Store from '@/store'

export default {
    name: "Servo2",
    data() {
        return {
            currentAngle: 1500 // [600, 2400]
        }
    },
    methods: {
        async tiltLeft() {
            if(this.currentAngle > 600) {
                this.currentAngle -= 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo2Angle/' + this.currentAngle)
                console.log(response)
            }
        },
        async tiltRight() {
            if(this.currentAngle < 2400) {
                this.currentAngle += 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo2Angle/' + this.currentAngle)
                console.log(response)
            }
        }
    }
}
</script>

<style scoped>

    .fill {
        width: 100%;
    }

</style>