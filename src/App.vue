<script>
import axios from 'axios';
const baseApiUrl = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
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

<template></template>

<style></style>