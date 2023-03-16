<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'HomaPage',
    components: { ProjectsList },
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
    <ProjectsList :projects="projects" />
</template>

<style></style>