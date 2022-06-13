<template>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <!-- FontAwesome -->
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <!-- Montserrat -->
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
    />
    <!-- Noto Sans -->
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
    />
    <!-- Open Sans -->
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
    />

    <div class="app">
        <Drawer />
        <router-view class="main" />
    </div>
</template>
<script>
import Drawer from './components/Drawer.vue';
export default {
    components: {
        Drawer,
    },
};
</script>
<style lang="scss">
:root {
    --font-first: 'Montserrat', sans-serif;
    --font-second: 'Noto Sans', sans-serif;
    --font-third: 'Open Sans', sans-serif;

    // --font-small: max(18px, 1vw);
    // --font-average: max(20px, 1.3vw);
    // --font-big: max(45px, 2.6vw);

    // --color-fourth: #9dc8e4;

    --color-first: #2aabe4;
    --color-second: #666b6e;
    --color-third: #ffcd24;
    --color-fourth: #ffffff;
    --color-fivth: #9dc8e4;
    --color-sixth: #cecece;

    --background-app: #0b64fe;
    --background-drawer: #33393d;
    --background-all-card: #1240ab;

    --transition-drawer: 0.4s ease-in-out;

    --background-button-delete: #ff0000;
    --background-button-edit: #4caf50;
}
// [data-theme='light'] {
//     --color-first: #91a8cf;
//     --color-second: #fffbfb;
//     --color-third: #3e4668;
//     --color-fourth: #cecece;
// }
// [data-theme='dark'] {
//     --color-first: #999999;
//     --color-third: #282828;
// }
.app {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--background-app);
    .main {
        margin: 2vw 5vw;
    }
}
.text-limited {
    --snup: 5;
    display: -webkit-box;
    -webkit-line-clamp: var(--snup);
    -webkit-box-orient: vertical;
    overflow: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
}
img {
    width: 100%;
    height: 100%;
}
a,
button,
input,
textarea {
    outline: none;
    color: inherit;
    background: none;
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: inherit;
    resize: none;
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

</style>
