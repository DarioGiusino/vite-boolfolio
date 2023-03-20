<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            return this.project.description = this.project.description.substring(0, 150) + '...';
        }
    }
}
</script>

<template>
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="https://marcolanci.it/utils/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h6 class="card-title">{{ project.title }} <sup><span class="badge rounded-pill"
                                :style="`background-color: ${project.type.color}`">{{ project.type.label }}</span></sup>
                    </h6>
                    <p class="card-text">{{ abstract }}</p>
                    <div class="mb-2">
                        <h6 class="card-title">Used technologies:</h6>
                        <div><sup><span v-for="technologies in project.technologies" :key="technologies.id"
                                    class="badge rounded-pill me-1 mb-1"
                                    :style="`background-color: ${technologies.color}`">{{
                                        technologies.label }}</span></sup></div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <router-link :to="{ name: 'project-detail', params: { slug: project.slug } }"
                        class="btn btn-sm btn-primary">Open</router-link>
                    <a href="#" class="card-link">Repo Link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>