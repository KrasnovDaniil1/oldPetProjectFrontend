<template>
    <div class="header">
        <div class="flex-block" v-if="windowWidth > 768">
            <NavRouter nav="Главная" path="/" />
            <NavRouter nav="Задачи" path="/notes" />
        </div>
        <Hamburger v-if="windowWidth < 768" @click="openDrower = !openDrower" />
        <Drower v-if="windowWidth < 768 && openDrower" />
        <div class="flex-block">
            <UserLogin />
        </div>
    </div>
</template>
<script>
import NavRouter from './NavRouter.vue';
import UserLogin from './UserLogin.vue';
import Hamburger from './Hamburger.vue';
import Drower from './Drower.vue';

import { ref, onMounted } from 'vue';
export default {
    name: 'HeaderDesktop',
    components: {
        NavRouter,
        UserLogin,
        Hamburger,
        Drower,
    },
    setup() {
        const windowWidth = ref(window.innerWidth);
        const openDrower = ref(false);
        onMounted(() => {
            window.addEventListener(
                'resize',
                () => (windowWidth.value = window.innerWidth)
            );
        });
        return {
            windowWidth,
            openDrower,
        };
    },
};
</script>
<style lang="scss" scoped>
.header {
    position: relative;
    padding: 0.75rem 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-first);
    .flex-block {
        display: flex;
        align-items: center;
    }
}
</style>
