<template>
    <router-link class="nav-router" :to="{ path: path }">
        {{ nav }}
        <i class="icon far fa-angle-right"></i>
    </router-link>
</template>
<script>
export default {
    name: 'NavRouter',
    props: {
        nav: String,
        path: String,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.nav-router {
    display: flex;
    align-items: center;
    padding: 0.25em;
    margin-right: 1em;
    font-size: var(--size-second);
    color: var(--color-first);
    .icon {
        margin-left: 0.3em;
        transition: all var(--transition-first);
    }
}
.router-link-active {
    .icon {
        transform: rotate(90deg);
    }
}
</style>
