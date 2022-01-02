<template>
<div class="mainContainer">
  <RegForm />
</div>
</template>

<script>
import RegForm from './components/RegistrationForm.vue'

export default {
  name: 'App',
  components: {
    RegForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainContainer{
  background-color: #3399CC;
  height: 100vh;
}

</style>
