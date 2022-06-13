<template>
    <div class="weather-day">
        <div class="info" style="grid-area: weatherDay">
            <span class="info-num">{{ time.substring(5) }}</span>
            <span class="info-text">{{ time.substring(0, 4) }}</span>
        </div>
        <div class="weather-icon" style="grid-area: weatherIcon">
            <img class="image" :src="image" alt="Image" />
        </div>
        <div class="info" style="grid-area: low">
            <span class="info-num">{{ low }}</span>
            <span class="info-text">Low°</span>
        </div>
        <div class="info" style="grid-area: high">
            <span class="info-num">{{ high }}</span>
            <span class="info-text">High°</span>
        </div>
        <div class="info" style="grid-area: rain">
            <span class="info-num">{{ rain }}</span>
            <span class="info-text">Rain %</span>
        </div>
        <div class="info" style="grid-area: wind">
            <span class="info-num">{{ wind }}</span>
            <span class="info-text">Wind km/h</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardWeatherDay',
    props: {
        time: String,
        image: String,
        high: Number,
        wind: Number,
        low: Number,
        rain: Number,
    },
    setup() {},
};
</script>

<style lang="scss" scoped>
.weather-day {
    width: 100%;
    display: grid;
    grid-template-areas: 'weatherDay  weatherIcon  low low  high high rain rain wind wind';
    align-items: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    // padding: var(--size-first) 0;
    border-radius: 4px;
    .weather-icon {
        font-size: var(--size-fourth);
        display: flex;
        justify-content: center;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-num {
            font-size: var(--size-second);
        }
        .info-text {
            font-size: var(--size-second);
            color: rgba(255, 255, 255, 0.6);
        }
    }
}
@media screen and (max-width: 600px) {
    .weather-day {
        grid-template-areas:
            'weatherDay low high'
            'weatherIcon rain wind';
        .info {
            line-height: 1.5;
            padding: var(--size-first) 0;
        }
    }
}
</style>
