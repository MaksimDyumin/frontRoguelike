<template>
  <router-view v-slot="{ Component }" class="routerView">  
    
    <transition name="slide" mode="out-in">
    
      <component :is="Component" />
    </transition>

  </router-view>
</template>

<script>

// import '../assets/css/animate-custom.css';

import './test.js'
import './game'
import './assets/css/Style.css'

export default {
  name: 'App',
  methods: {
    
  },

  data: () => {
    return {
      connection: null
    }
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
}

</script>

<style lang="scss">

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
  opacity: 1;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
  opacity: 0;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
  opacity: 0;
}

.slide-leave-from {
  position: absolute;
  left: 0;
  opacity: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: grid;
  align-items: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
