<template>
    <div class="header">
        <button
            class="burger"
            v-if="windowWidth < 1024"
            @click="changeHeaderDrowerOpen"
        >
            <i class="far fa-bars" v-if="!headerDrowerOpen"></i>
            <i class="far fa-times" v-if="headerDrowerOpen"></i>
        </button>
        <div class="flex" v-if="windowWidth > 1024">
            <NavRouter path="/" nav="Главная" />
            <NavRouter path="/diary" nav="Ежедневник" />
            <NavRouter path="/notes" nav="Заметки" />
        </div>
        <div class="flex">
            <SwitchTheme v-if="windowWidth > 1024" />
            <SwitchLanguage v-if="windowWidth > 1024" />
            <UserLogin />
        </div>
    </div>
</template>
<script>
import UserLogin from './UserLogin.vue';
import NavRouter from './NavRouter.vue';
import SwitchLanguage from './SwitchLanguage.vue';
import SwitchTheme from './SwitchTheme.vue';
import { ref, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    name: 'HeaderDesktop',
    components: {
        UserLogin,
        NavRouter,
        SwitchLanguage,
        SwitchTheme,
    },
    setup() {
        const store = useStore();
        const windowWidth = ref(window.innerWidth);
        const changeHeaderDrowerOpen = () => {
            store.commit('changeHeaderDrowerOpen');
        };
        onMounted(() => {
            window.addEventListener(
                'resize',
                () => (windowWidth.value = window.innerWidth)
            );
        });
        return {
            windowWidth,
            changeHeaderDrowerOpen,
            headerDrowerOpen: computed(() => store.getters.returnHeaderDrowerOpen),
        };
    },
};
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: var(--header-height);
    padding: 5px 0px;
    background: #005da1;
    .flex {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .burger {
        height: 100%;
        aspect-ratio: 1/1;
        font-size: var(--size-second);
        margin: 0 var(--size-first);
        color: #f2f2f2;
        background: var(--background-first);
        border-radius: 3px;
    }
}
</style>
