<template>
    <v-app-bar
      class="pl-8 pr-8"
    >
      <v-toolbar-title><img src="../assets/img/netflixLogo.png" class="imgLogo"/></v-toolbar-title>
      <v-btn text class="ml-6">
        Inicio
      </v-btn>
      <v-btn text>
        Série
      </v-btn>
      <v-btn text>
        Filmes
      </v-btn>
      <v-btn text>
        Bombando
      </v-btn>
      <v-btn text>
        Minha lista
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<style scoped>
.imgLogo {
  width: 100px;
  height: 100px;
}
</style>
