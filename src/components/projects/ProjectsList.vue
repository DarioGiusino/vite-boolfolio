<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array, }
}
</script>

<template>
    <section id="projects-list">
        <h1 class="text-center mb-5">Projects List</h1>
        <div class="row row-cols-4">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style></style>