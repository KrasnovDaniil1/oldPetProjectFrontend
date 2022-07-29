<template>
    <div class="drower">
        <NavRouter path="/" nav="Главная" class="item" />
        <NavRouter path="/diary" nav="Ежедневник" class="item" />
        <NavRouter path="/notes" nav="Заметки" class="item" />
        <SwitchLanguage class="item" />
        <SwitchTheme class="item" />
    </div>
</template>
<script>
import NavRouter from './NavRouter.vue';
import SwitchLanguage from './SwitchLanguage.vue';
import SwitchTheme from './SwitchTheme.vue';
export default {
    name: 'HeaderDrower',
    components: {
        NavRouter,
        SwitchLanguage,
        SwitchTheme,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.drower {
    position: fixed;
    top: var(--header-height);
    width: fit-content;
    display: flex;
    flex-direction: column;
    background: #005da1;
    border-radius: 0 0 3px 0;
    .item {
        margin: calc(var(--size-first) / 2) var(--size-first);
        height: calc(var(--header-height) / 1.2);
    }
}
</style>
