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
        <CameraServos/>
    </div>
</template>

<script>
import CameraServos from '@/components/CameraServos'
import SetIP from '@/components/SetIP'

export default {
    name: 'MainMenu',
    components: {
        CameraServos,
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