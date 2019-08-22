<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>RPiCar</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <MainMenu/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MainMenu from '@/views/MainMenu'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainMenu
  },
  data: () => ({
    //
  }),
};
</script>
