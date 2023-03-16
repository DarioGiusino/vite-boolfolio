<script>
import axios from 'axios';
import AppNavbar from './components/AppNavbar.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: { AppNavbar, ProjectsList },
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
  <main class="container">
    <ProjectsList :projects="projects" />
  </main>
</template>

<style></style>