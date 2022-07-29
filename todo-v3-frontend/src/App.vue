<template>
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
    <Authorization />
    <EditAuthorization />
    <AddCard />
    <BackgroundMain />
    <HeaderDesktop />
    <Error v-if="false" />
    <router-view />
</template>

<script>
import HeaderDesktop from './components/Header/HeaderDesktop.vue';
import EditAuthorization from './components/EditAuthorization.vue';
import BackgroundMain from './components/BackgroundMain.vue';
import Authorization from './components/Authorization.vue';
import AddCard from './components/Card/AddCard.vue';
import Error from './components/Error.vue';

export default {
    components: {
        HeaderDesktop,
        BackgroundMain,
        Authorization,
        EditAuthorization,
        AddCard,
        Error,
    },
    setup() {},
};
</script>
<style lang="scss">
:root {
    --font-body: 'Inter', sans-serif;

    --size-body: max(10px, 0.5vw);
    --size-first: max(20px, 1vw);
    --size-second: max(24px, 1.25vw);
    --size-third: max(30px, 1.56vw);

    --color-first: #f2f2f2;
    --color-second: #000000;

    // --transition-first: 0.4s ease-in-out;
    // --transition-second: 0.2s ease-in-out;
}
@media screen and (max-width: 1368px) {
    :root {
        --size-first: 18px;
        --size-second: 22px;
        --size-third: 28px;
    }
}
@media screen and (max-width: 768px) {
    :root {
        --size-body: 8px;
        --size-first: 16px;
        --size-second: 20px;
        --size-third: 26px;
    }
}
@media screen and (max-width: 475px) {
    :root {
        --size-body: 6px;
        --size-first: 14px;
        --size-second: 18px;
        --size-third: 24px;
    }
}
@media screen and (max-width: 320px) {
    :root {
        --size-body: 5px;
        --size-first: 12px;
        --size-second: 16px;
        --size-third: 22px;
    }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: var(--font-body);
    font-weight: inherit;
    line-height: 1;
    white-space: inherit;
    color: inherit;
}
html,
body {
    font-size: var(--size-body);
    font-weight: 500;
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
    white-space: pre-wrap;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: none;
    resize: none;
    &::placeholder {
        color: inherit;
    }
}
::-webkit-scrollbar {
    /*блок скролла*/
    background: #000000;
    width: 5px;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    border-radius: 10px;
    background: #f2f2f2;
}
.limited-text {
    // --snup: 2;
    display: -webkit-box;
    -webkit-line-clamp: var(--snup);
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
