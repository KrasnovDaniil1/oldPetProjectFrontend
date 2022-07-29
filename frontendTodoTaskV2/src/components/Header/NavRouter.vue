<template>
    <router-link class="nav-router" :to="{ path: path }">
        {{ nav }}
        <i class="icon fas fa-angle-right"></i>
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
    margin: 0 var(--size-first);
    font-size: var(--size-fourth);
    color: var(--color-first);
    .icon {
        transition: all var(--transition-first);
    }
}
.router-link-active {
    .icon {
        transform: rotate(90deg);
    }
}
</style>
