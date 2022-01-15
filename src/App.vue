<template>
  <router-view v-slot="{ Component }" class="routerView">  
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>

import './game'
import './assets/css/App.scss'

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