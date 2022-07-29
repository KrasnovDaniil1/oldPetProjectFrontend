<template>
    <div class="error">Error</div>
</template>
<script>
export default {
    name: 'Error',
    setup() {},
};
</script>
<style scoped>
.error {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 0.5em 1em;
    font-size: var(--size-third);
    color: var(--color-first);
    background: red;
    border-radius: 4px;
    z-index: 999;
}
</style>
