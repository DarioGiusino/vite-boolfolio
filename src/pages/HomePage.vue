<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'HomaPage',
    components: { ProjectsList },
    data() {
        return {
            projects: [],
            isLoading: false
        }
    },
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(baseApiUrl + 'projects').then(res => {
                this.projects = res.data;
                this.isLoading = false;
            }).catch(err => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchProjects();
    }

}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects" />
</template>

<style></style>