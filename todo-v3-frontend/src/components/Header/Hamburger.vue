<template>
    <button class="hamburger">
        <i class="far fa-bars"></i>
    </button>
</template>
<script>
export default {
    name: 'Hamburger',
    setup() {},
};
</script>
<style lang="scss" scoped>
.hamburger {
    width: 1.4em;
    aspect-ratio: 1/1;
    font-size: var(--size-third);
    color: var(--color-first);
    border: 1px solid var(--color-first);
    border-radius: 4px;
}
</style>
