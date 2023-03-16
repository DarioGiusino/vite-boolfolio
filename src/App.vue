<script>
import AppNavbar from './components/AppNavbar.vue';
export default {
  name: 'App',
  components: { AppNavbar },
}
</script>

<template>
  <AppNavbar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style></style>