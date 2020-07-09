<template>
  <v-app>
    <v-navigation-drawer
     app v-model="drawer"
     clipped
    >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.url">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="light-blue" dark app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title text>Selfindication</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/work">Work</v-btn>
      <v-btn text to="/favorite">Favorite</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>
    <v-content>
      <transition
        mode=”out-in”
        enter-active-class="animate__animated animate__heartBeat"
        appear
      >
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app> 
 </template>

<script>
export default {
  data(){
    return{
      drawer: false,
      nav_lists:[
        {name: 'Home', icon: 'mdi-home', url:'/'},
        {name: 'About', icon: 'mdi-information', url:'/about'},
        {name: 'Work', icon: 'mdi-laptop-mac', url:'/work'},
        {name: 'Favorite', icon: 'mdi-cards-playing-outline', url:'/favorite'},
        {name: 'Contact', icon: 'mdi-email', url:'/contact'}
      ],
    }
  },
};
</script>

<style scoped>
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
  transition-delay: 1.27s;
}
.v-enter-to {
  opacity: 1;
  transition-delay: 1.27s;
}
.v-enter-active {
  transition: all 1.27s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
</style>