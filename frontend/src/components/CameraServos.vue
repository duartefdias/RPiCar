<template>
        <v-container>
            <v-row justify="center">
                <v-col sm="3" md="2">
                    <v-btn @click="tiltUp()" class="fill">UP</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col sm="3" md="2">
                    <v-btn @click="tiltLeft()" class="fill">LEFT</v-btn>
                </v-col>
                <v-col sm="3" md="2">
                    <v-btn @click="tiltRight()" class="fill">RIGHT</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col sm="3" md="2">
                    <v-btn @click="tiltDown()" class="fill">DOWN</v-btn>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import axios from 'axios'
import Store from '@/store'

export default {
    name: "CameraServos",
    data() {
        return {
            currentAngle1: 1500, // [600, 2400]
            currentAngle2: 1500 // [600, 2400]
        }
    },
    methods: {
        async tiltUp() {
            if(this.currentAngle2 < 2400) {
                this.currentAngle2 += 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo2Angle/' + this.currentAngle2)
                console.log(response)
            }
        },
        async tiltLeft() {
            if(this.currentAngle1 < 2400) {
                this.currentAngle1 += 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo1Angle/' + this.currentAngle1)
                console.log(response)
            }
        },
        async tiltRight() {
            if(this.currentAngle1 > 600) {
                this.currentAngle1 -= 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo1Angle/' + this.currentAngle1)
                console.log(response)
            }
        },
        async tiltDown() {
            if(this.currentAngle2 > 600) {
                this.currentAngle2 -= 100
                let response = await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo2Angle/' + this.currentAngle2)
                console.log(response)
            }
        },
    },
    async created() {
        // Configure keyboard/joystick controls
        window.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp'){
                this.tiltUp()
            }
        })
        window.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowLeft'){
                this.tiltLeft()
            }
        })
        window.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowRight'){
                this.tiltRight()
            }
        })
        window.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowDown'){
                this.tiltDown()
            }
        })
        // Reset angle
        await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo1Angle/' + this.currentAngle1)
        await axios.get('http://192.168.1.' + Store.getRPiLastIpDigit() + ':3000/servo2Angle/' + this.currentAngle2)
    }
}
</script>

<style scoped>

    .fill {
        width: 100%;
    }

</style>