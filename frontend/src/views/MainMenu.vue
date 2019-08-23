<template>
    <div>
        <br>
        <v-row justify="center">
            <h2> Set Raspberry pi IP </h2>
        </v-row>
        <SetIP/>
        <br>
        <v-row justify="center">
            <h2> Servo angle </h2>
        </v-row>
        <br>
        <Servo1/>
        <br>
        <Servo2/>
    </div>
</template>

<script>
import Servo1 from '@/components/Servo1'
import Servo2 from '@/components/Servo2'
import SetIP from '@/components/SetIP'

export default {
    name: 'MainMenu',
    components: {
        Servo1,
        Servo2,
        SetIP
    },
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    }
}
</script>