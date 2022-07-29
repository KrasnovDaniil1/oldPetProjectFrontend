<template>
    <div class="drower">
        <NavRouter nav="Главная" path="/" class="route" />
        <NavRouter nav="Задачи" path="/notes" class="route" />
    </div>
</template>
<script>
import NavRouter from './NavRouter.vue';

export default {
    name: 'Drower',
    components: {
        NavRouter,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.drower {
    position: absolute;
    bottom: 0;
    transform: translateY(110%);
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 1px solid var(--color-first);
    .route {
        margin: 1rem 0;
    }
}
</style>
