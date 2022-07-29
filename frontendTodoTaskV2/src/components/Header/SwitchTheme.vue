<template>
    <div class="theme-block">
        <i
            v-for="(theme, index) in themes"
            class="fas theme"
            :class="[{ 'active-theme': activeTheme == theme }, `fa-${theme}`]"
            @click="changeTheme(theme)"
            :key="index"
        ></i>
        <span
            :style="{
                left: (100 / themes.length) * themes.indexOf(activeTheme) + '%',
            }"
            class="select-theme"
        ></span>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'SwitchTheme',
    setup() {
        const themes = ['sun', 'moon'];
        const activeTheme = ref('sun');
        const changeTheme = (theme) => {
            activeTheme.value = theme;
        };
        return {
            themes,
            activeTheme,
            changeTheme,
        };
    },
};
</script>
<style lang="scss" scoped>
.theme-block {
    height: 100%;
    width: fit-content;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--background-first);
    border-radius: var(--size-first);
    font-size: var(--size-first);
    margin: 0 var(--size-first);
    .theme {
        padding: 0 calc(var(--size-first) / 2);
        z-index: 1;
        color: var(--color-first);
        transition: var(--transition-first);
    }
    .active-theme {
        color: var(--color-second);
    }
    .select-theme {
        position: absolute;
        // width определяеться автоматически в aspect-ratio
        // left определяеться автоматически в style
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: var(--background-second);
        transition: 0.4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 1px;
    }
}
</style>
