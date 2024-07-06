<script>
import { ref } from 'vue';

export default {
  name: "App",
  setup() {
    let num = ref(0);
    function increment() {
      num.value++;
    }

    return {
      num,
      increment
    }
  }
};
</script>



<template>
  <div id="app">
    {{ num }}
    <button @click="increment">Click me</button>
    <router-link to="/">Home</router-link>
    <router-link to="/about/admin">About</router-link>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}

button {
  width: 100px;
  height: 40px;
}
</style>
