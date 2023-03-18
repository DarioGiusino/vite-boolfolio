<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppPagination from '../components/AppPagination.vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'HomaPage',
    components: { ProjectsList, AppPagination },
    data() {
        return {
            projects: {
                data: [],
                links: []
            },
            isLoading: false
        }
    },
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;

            if (!endpoint) endpoint = baseApiUrl + 'projects';

            axios.get(endpoint).then(res => {
                const { data, links } = res.data;
                this.projects = { data, links };
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
    <div v-else>
        <ProjectsList :projects="projects.data" />
        <AppPagination :links="projects.links" @change-page="fetchProjects" />
    </div>
</template>

<style></style>