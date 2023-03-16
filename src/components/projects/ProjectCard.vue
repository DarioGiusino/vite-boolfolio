<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
}
</script>

<template>
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="https://marcolanci.it/utils/placeholder.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">{{ project.title }} <sup>type</sup></h5>
                    <p class="card-text">{{ project.description }}[abstract]</p>
                    <div class="mb-2">
                        <h6 class="card-title">Used technologies:</h6>
                        <div>rounded pills</div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-sm btn-primary">Open</a>
                    <a href="#" class="card-link">Repo Link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>