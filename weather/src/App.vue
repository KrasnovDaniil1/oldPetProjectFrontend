<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <div class="app">
        <WeatherHeader
            :city="weather.location.name"
            :day="weather.location.localtime"
        />

        <CardWeatherDayNow
            :image="weather.current.condition.icon"
            :nowTemp="weather.current.temp_c"
            :nowWeather="weather.current.condition.text"
            :high="weather.forecast.forecastday[0].day.maxtemp_c"
            :wind="weather.forecast.forecastday[0].day.maxwind_kph"
            :sunrise="weather.forecast.forecastday[0].astro.sunrise"
            :low="weather.forecast.forecastday[0].day.mintemp_c"
            :rain="weather.forecast.forecastday[0].day.daily_chance_of_rain"
            :sunset="weather.forecast.forecastday[0].astro.sunset"
        />
        <h1 class="title">Today's weather</h1>
        <div class="block-weather-hour">
            <CardWeatherHour
                v-for="index in 8"
                :time="
                    weather.forecast.forecastday[0].hour[(index - 1) * 3].time
                "
                :image="
                    weather.forecast.forecastday[0].hour[(index - 1) * 3]
                        .condition.icon
                "
                :temp="
                    weather.forecast.forecastday[0].hour[(index - 1) * 3].temp_c
                "
                :key="index"
            />
        </div>
        <h1 class="title">Next 3 days</h1>
        <div class="block-weather-day">
            <CardWeatherDay
                v-for="index in weather.forecast.forecastday.length"
                :key="index"
                :time="weather.forecast.forecastday[index - 1].date"
                :image="
                    weather.forecast.forecastday[index - 1].day.condition.icon
                "
                :high="weather.forecast.forecastday[index - 1].day.maxtemp_c"
                :wind="weather.forecast.forecastday[index - 1].day.maxwind_kph"
                :low="weather.forecast.forecastday[index - 1].day.mintemp_c"
                :rain="
                    weather.forecast.forecastday[index - 1].day
                        .daily_chance_of_rain
                "
            />
        </div>
    </div>
</template>

<script>
import WeatherHeader from './components/WeatherHeader.vue';
import CardWeatherDayNow from './components/CardWeatherDayNow.vue';
import CardWeatherHour from './components/CardWeatherHour.vue';
import CardWeatherDay from './components/CardWeatherDay.vue';

import { useStore } from 'vuex';
import { computed, onBeforeMount } from '@vue/runtime-core';

export default {
    components: {
        WeatherHeader,
        CardWeatherDayNow,
        CardWeatherHour,
        CardWeatherDay,
    },
    setup() {
        const store = useStore();
        // const localCountry = ref();

        onBeforeMount(() => {
            store.dispatch('fetchUserCountry');

            store.dispatch('fetchWeather');
        });
        return {
            store,
            // localCountry: computed(() => store.getters.localCountry),
            weather: computed(() => store.getters.weather),
        };
    },
};
</script>

<style lang="scss">
:root {
    --size-first: max(15px, 0.52vw);
    --size-second: max(22px, 1.04vw);
    --size-third: max(30px, 1.56vw);
    --size-fourth: max(40px, 2.08vw);
    --size-fiveth: max(90px, 5vw);
}

.app {
    width: max(900px, 45vw);
    margin: 0 auto;
    min-height: 100vh;
    .title {
        font-size: var(--size-second);
        margin: var(--size-second) 0;
        color: rgba(255, 255, 255, 0.8);
    }
    .block-weather-hour {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-gap: var(--size-first);
    }
    .block-weather-day {
        display: flex;
        flex-direction: column;
        grid-gap: var(--size-first);
    }
}
@media screen and (max-width: 968px) {
    :root {
        // --size-first: 9px;
        // --size-second: 19px;
        --size-third: 28px;
        --size-fourth: 34px;
        --size-fiveth: 80px;
    }
    .app {
        width: 100%;
        padding: 0 var(--size-first);
    }
}

@media screen and (max-width: 600px) {
    :root {
        --size-first: 8px;
        --size-second: 22px;
        --size-third: 26px;
        --size-fourth: 30px;
    }
    .app {
        .block-weather-hour {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
@media screen and (max-width: 375px) {
    :root {
        --size-first: 6px;
        --size-second: 16px;
        --size-third: 20px;
        --size-fourth: 22px;
        --size-fiveth: 60px;
    }
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-weight: 500;
    font: inherit;
    line-height: inherit;
    color: inherit;
}
html,
body {
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(
        to bottom,
        rgb(43, 50, 178) 0%,
        rgb(20, 136, 204) 100%
    );
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

input,
textarea {
    width: 100%;
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
    background: linear-gradient(
        to bottom,
        rgb(43, 50, 178) 0%,
        rgb(20, 136, 204) 100%
    );
    width: 5px;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    border-radius: 10px;
    background: #fff;
}
</style>
