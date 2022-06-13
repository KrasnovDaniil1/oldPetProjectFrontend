<template>
    <div class="weather-now">
        <div class="weather-icon" style="grid-area: weatherIcon">
            <img class="image" :src="image" alt="Image" />
        </div>
        <div class="info now-temp" style="grid-area: nowTemp">
            <span class="info-num">{{ nowTemp }}</span>
            <span class="info-text">{{ nowWeather }} °</span>
        </div>
        <div class="info br-top" style="grid-area: high">
            <span class="info-num">{{ high }}</span>
            <span class="info-text">High °</span>
        </div>
        <div class="info br-top" style="grid-area: wind">
            <span class="info-num">{{ wind }}</span>
            <span class="info-text">Wind km/h</span>
        </div>
        <div class="info br-top" style="grid-area: sunrise">
            <span class="info-num">{{ sunrise.substring(0, 5) }}</span>
            <span class="info-text">Sunrise {{ sunrise.substring(5) }}</span>
        </div>
        <div class="info br-bot" style="grid-area: low">
            <span class="info-num">{{ low }}</span>
            <span class="info-text">Low °</span>
        </div>
        <div class="info br-bot" style="grid-area: rain">
            <span class="info-num">{{ rain }}</span>
            <span class="info-text">Rain % </span>
        </div>
        <div class="info br-bot" style="grid-area: sunset">
            <span class="info-num">{{ sunset.substring(0, 5) }}</span>
            <span class="info-text">Sunset {{ sunset.substring(5) }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardWeatherDay',
    props: {
        image: String,
        nowTemp: Number,
        nowWeather: String,
        high: Number,
        wind: Number,
        sunrise: Number,
        low: Number,
        rain: Number,
        sunset: Number,
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.weather-now {
    display: grid;
    grid-template-areas:
        'weatherIcon weatherIcon  nowTemp  high  wind  sunrise '
        'weatherIcon weatherIcon  nowTemp  low  rain  sunset ';
    align-items: center;
    color: #fff;

    .weather-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .info-num {
            font-size: var(--size-third);
        }
        .info-text {
            font-size: var(--size-second);
            color: rgba(255, 255, 255, 0.6);
        }
    }
    .now-temp {
        border-right: 1px solid #fff;
        padding: var(--size-second) 0;

        .info-num {
            font-size: var(--size-fiveth);
            font-weight: 300;
        }
        .info-text {
            font-size: var(--size-second);
            color: #fff;
        }
    }
}
@media screen and (max-width: 600px) {
    .weather-now {
        grid-template-areas:
            'weatherIcon weatherIcon weatherIcon  nowTemp nowTemp nowTemp'
            'high high wind wind sunrise sunrise'
            'low low rain rain sunset sunset';
        .now-temp {
            border: none;
        }
        .info {
            line-height: 1.5;
            padding: var(--size-first) 0;
        }
        .br-top {
            border-top: 1px solid #fff;
        }
        .br-bot {
            border-bottom: 1px solid #fff;
        }
    }
}
</style>
