<template>
    <v-container>
        <v-row justify="center" style="font-size: 26px">
            <v-col sm="3" md="2" style="text-align: end; margin-top: 6px">
                <span>192.168.1.</span>
            </v-col>
            <v-col sm="3" md="2" >
                <v-text-field
                    placeholder="..."
                    v-model="lastDigit"
                    full-width=""
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col sm="3" md="2">
                <v-btn style="width: 100%" @click="setIp">SET</v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col sm="2" md="2">
                <span v-if="IpSet">Last digit set to {{lastDigit}}</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Store from '@/store'

export default {
    name: 'SetIP',
    data() {
        return {
            IpSet : false,
            lastDigit: null
        }
    },
    methods: {
        setIp() {
            Store.setRPiLastIpDigit(this.lastDigit)
            console.log('RPi last digit set to ' + Store.getRPiLastIpDigit())
            this.IpSet = true
        }
    }
}
</script>