<template>
  <div>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
}
</script>