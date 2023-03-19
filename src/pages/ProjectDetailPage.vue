<script>
import axios from 'axios';
const baseApiUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'ProjectDetailPage',
    data() {
        return {
            project: {},
            isLoading: false,
        }
    },
    methods: {
        fetchProject() {
            this.isLoading = true,

                axios.get(baseApiUrl + `projects/${this.$route.params.id}`).then(res => {
                    this.project = res.data;
                    this.isLoading = false;
                }).catch(err => {
                    this.$router.push({ name: 'error-404-page' })
                }).then(() => {
                    this.isLoading = false;
                })
        }
    },
    created() {
        this.fetchProject();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <section v-else id="project-details" class="mb-5">
        <!-- project title -->
        <h1 class="text-center mb-5">{{ project.title }} <sup><span class="badge rounded-pill"
                    :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span></sup></h1>
        <!-- project image -->
        <div class="img-box mb-5"></div>
        <!-- project content -->
        <p>{{ project.description }}</p>
        <!-- project technologies -->
        <div class="mb-2">
            <h6 class="card-title mb-2">Used technologies:</h6>
            <div><sup><span v-for="technologies in project.technologies" :key="technologies.id"
                        class="badge rounded-pill me-1 mb-1" :style="`background-color: ${technologies.color}`">{{
                            technologies.label }}</span></sup></div>
        </div>
        <!-- project button&links -->
        <div class="project-buttons">
            <a class="me-3" href="">GitHub Link</a>
            <router-link to='/' class="btn btn-secondary">Back</router-link>
        </div>
    </section>
</template>

<style scoped lang="scss">
.img-box {
    border: 2px solid rebeccapurple;
    border-radius: 25px;
    overflow: hidden;
    height: 30rem;
    background-image: url("https://marcolanci.it/utils/placeholder.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>