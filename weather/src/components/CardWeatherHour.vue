<template>
    <div class="weather-hour">
        <span class="info">{{ time.substring(11, 13) }}</span>
        <img :src="image" alt="Изображение" />
        <span class="info">{{ temp }}°</span>
    </div>
</template>
<script>
export default {
    name: 'CardWeatherHour',
    props: {
        time: String,
        image: String,
        temp: String,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.weather-hour {
    width: 100%;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.15);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--size-first) 0;

    .info {
        font-size: var(--size-second);
    }
}
</style>
