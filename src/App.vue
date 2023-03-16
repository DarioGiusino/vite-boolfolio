<script>
import axios from 'axios';
import AppNavbar from './components/AppNavbar.vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: { AppNavbar },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    fetchProjects() {
      axios.get(baseApiUrl + 'projects').then(res => {
        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppNavbar />
</template>

<style></style>