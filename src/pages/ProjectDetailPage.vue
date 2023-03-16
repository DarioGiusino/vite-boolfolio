<script>
import axios from 'axios';
import { provide } from 'vue';
const baseApiUrl = 'http://127.0.0.1:8000/api/';

export default {
    name: 'ProjectDetailPage',
    data() {
        return {
            project: {}
        }
    },
    methods: {
        fetchProject() {
            axios.get(baseApiUrl + `projects/${this.$route.params.id}`).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchProject();
    }
}
</script>

<template>
    <section id="project-details" class="mb-5">
        <!-- project title -->
        <h1 class="text-center mb-5">{{ project.title }}</h1>
        <!-- project image -->
        <div class="img-box mb-5"></div>
        <!-- project content -->
        <p>{{ project.description }}</p>
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