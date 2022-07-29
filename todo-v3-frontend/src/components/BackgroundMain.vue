<template>
    <div class="background">
        <img class="image" :src="randomBackground()" alt="Изображение" />
    </div>
</template>
<script>
export default {
    name: 'BackgroundMain',
    setup() {
        const randomBackground = () => {
            const imageNum = Math.floor(Math.random() * 3);
            return require(`@/assets/backgroundImage/background-${imageNum}.jpg`);
        };
        return {
            randomBackground,
        };
    },
};
</script>
<style lang="scss" scoped>
.background {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    // .image {
    //     width: 100%;
    //     height: 100%;
    // }
}
</style>
