<template>
  <v-card>
    <v-app-bar
      class="pl-8 pr-8"
      hide-on-scroll
      color="rgba(0,0,0,0)"
      :v-bind="$attrs"
      fixed
      flat
    >
      <v-toolbar-title
        ><img src="../assets/img/netflixLogo.png" class="imgLogo"
      /></v-toolbar-title>
      <v-btn text class="ml-6 white--text"> Inicio </v-btn>
      <v-btn text class="white--text"> Série </v-btn>
      <v-btn text class="white--text"> Filmes </v-btn>
      <v-btn text class="white--text"> Bombando </v-btn>
      <v-btn text class="white--text"> Minha lista </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="white--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="white--text">
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<style scoped>
.imgLogo {
  width: 100px;
  height: 100px;
}
</style>
