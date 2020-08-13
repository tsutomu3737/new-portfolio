<template>
  <v-app>
    <v-navigation-drawer
     app v-model="drawer"
     clipped
     :color="color"
    >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
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
      color: 'transparent',
    }
  },
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 0.8s 0.8s ease;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all 0s 0s ease;
}

.v-list-item__title,
.v-list-item__icon,
.v-list-item__icon i 
{
  color: #FFF;
}

.container {
  padding: 0;
}

@media screen and (max-width: 1366px){
  .spacer {
    display: none;
  }
  .v-toolbar__title {
    margin-right: 52%;
  }
}

@media screen and (max-width: 1024px){
  .v-btn--router {
    display: none;
  }
}

@media screen and (max-width: 320px){
  .v-toolbar__title {
    margin-right: 0;
  }
}
</style>