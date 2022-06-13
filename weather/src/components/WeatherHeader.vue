<template>
    <div class="header">
        <div class="place-data">
            <h1 class="place">{{ city }}</h1>
            <h2 class="data">{{ day }}</h2>
        </div>
        <label class="search">
            <input
                class="search-text"
                type="text"
                placeholder="Введите город"
                v-model="country"
            />
            <div class="search-icon" @click="getData">
                <i class="far fa-search"></i>
            </div>
        </label>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'WeatherHeader',
    props: {
        city: String,
        day: String,
    },
    setup() {
        const store = useStore();
        const country = ref();
        const getData = () => {
            store.commit('setCountry', country.value);
            store.dispatch('fetchWeather');
            country.value = '';
        };
        return {
            country,
            getData,
        };
    },
};
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: var(--size-second) 0;
    align-items: center;
    color: #fff;
    .place-data {
        .place {
            font-size: var(--size-fourth);
            font-weight: 600;
        }
        .data {
            font-size: var(--size-second);
            line-height: 1.5;
        }
    }
    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 400px;
        font-size: var(--size-second);
        border-radius: 4px;
        cursor: pointer;
        margin-left: var(--size-second);
        .search-text {
            padding: var(--size-first);
            border: 1px solid #fff;
            border-radius: 4px;
        }
        .search-icon {
            margin-left: var(--size-first);
            padding: var(--size-first);
            border: 1px solid #fff;
            border-radius: 4px;
        }
    }
}
</style>
