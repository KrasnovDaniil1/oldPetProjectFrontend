<template>
    <!-- FontAwesome -->
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <!-- Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
    />
    <SignRegistration v-if="signRegistrationOpen" />
    <HeaderDesktop />
    <HeaderDrower v-if="windowWidth < 1024 && headerDrowerOpen" />
    <router-view />
</template>
<script>
import HeaderDesktop from './components/Header/HeaderDesktop.vue';
import HeaderDrower from './components/Header/HeaderDrower.vue';
import SignRegistration from './components/SignRegistration.vue';
import { ref, onMounted, computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    components: {
        HeaderDesktop,
        SignRegistration,
        HeaderDrower,
    },
    setup() {
        const store = useStore();
        const windowWidth = ref(window.innerWidth);
        onMounted(() => {
            window.addEventListener(
                'resize',
                () => (windowWidth.value = window.innerWidth)
            );
        });
        return {
            windowWidth,
            signRegistrationOpen: computed(
                () => store.getters.returnSignRegistrationOpen
            ),
            headerDrowerOpen: computed(
                () => store.getters.returnHeaderDrowerOpen
            ),
        };
    },
};
</script>

<style lang="scss">
:root {
    --font-first: 'Inter', sans-serif;

    --size-first: max(20px, 1vw);
    --size-second: max(30px, 1.56vw);
    --size-third: max(50px, 2.6vw);
    --size-fourth: max(24px, 1.25vw);

    --header-height: max(50px, 2.6vw);
    --scroll-height: 10px;

    --color-first: #f2f2f2;
    --color-second: #000000;
    --color-third: #006fc0;
    --color-fourth: #0079bf;
    --color-fivth: #546179;
    --color-sixth: #172b4d;
    --color-seventh: #6b778c;
    --color-eighth: #42526e;
    --color-nineth: #f03f35;

    --background-first: rgba(255, 255, 255, 0.2);
    --background-second: #f2f2f2;
    --background-third: #006fc0;
    --background-fourth: #ebecf0;
    --background-fivth: #f4f5f7;
    --background-sixth: #5e6c842c;

    --transition-first: 0.4s ease-in-out;
    --transition-second: 0.2s ease-in-out;
}

@media screen and (max-width: 1024px) {
    :root {
        --size-first: 18px;
        --size-second: 25px;
        --size-third: 40px;
        --size-fourth: 22px;
        --header-height: 45px;
    }
}
@media screen and (max-width: 768px) {
    :root {
        --size-first: 17px;
        --size-second: 22px;
        --size-third: 35px;
        --size-fourth: 20px;
        --header-height: 40px;
    }
}
@media screen and (max-width: 475px) {
    :root {
        --size-first: 16px;
        --size-second: 20px;
        --size-third: 25px;
        --size-fourth: 18px;
        --header-height: 40px;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-size: inherit;
    line-height: 1;
    font-family: var(--font-first);
}
html,
body {
    font-size: 10px;
    background: #006fc0;
}
img {
    width: 100%;
    height: 100%;
}
a,
button {
    outline: none;
    color: inherit;
    background: none;
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: inherit;
    &:hover,
    &:focus,
    &:active {
        outline: none;
        color: inherit;
        background: none;
        text-decoration: none;
        border: none;
    }
}
ul,
ol,
li {
    list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font: inherit;
}
input,
textarea {
    background: none;
    border: none;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: none;
    resize: none;
    margin: 0;
    padding: 0;
    &::placeholder {
        color: inherit;
    }
}
::-webkit-scrollbar {
    /*блок скролла*/
    height: var(--scroll-height);
    background: #006fc0;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
}
.limited-text {
    // --snup: 3;
    display: -webkit-box;
    -webkit-line-clamp: var(--snup);
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
