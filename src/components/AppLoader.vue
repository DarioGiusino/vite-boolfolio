<script>
export default {
    name: 'AppLoader',
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border" role="status">
        </div>
    </div>
</template>

<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    .spinner-border {
        width: 250px;
        height: 250px;
    }
}
</style>